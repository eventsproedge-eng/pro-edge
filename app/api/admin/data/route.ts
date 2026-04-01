import { NextRequest, NextResponse } from 'next/server';
import { getServiceClient, isSupabaseConfigured } from '@/lib/supabase';
import { cookies } from 'next/headers';

const ALLOWED_TABLES = [
  'site_settings',
  'hero_slides',
  'services',
  'portfolio_images',
  'albums',
  'testimonials',
  'contact_submissions',
] as const;

type TableName = (typeof ALLOWED_TABLES)[number];

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  const token = cookieStore.get('proedge_admin_session');
  return Boolean(token?.value);
}

function isValidTable(table: string): table is TableName {
  return ALLOWED_TABLES.includes(table as TableName);
}

// GET /api/admin/data?table=services
export async function GET(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  const table = req.nextUrl.searchParams.get('table');
  if (!table || !isValidTable(table)) {
    return NextResponse.json({ error: 'Invalid table' }, { status: 400 });
  }

  const sb = getServiceClient();
  const sortableTables = ['hero_slides', 'services', 'portfolio_images', 'albums', 'testimonials'];
  const orderCol = sortableTables.includes(table) ? 'sort_order' : 'created_at';
  const ascending = table !== 'contact_submissions';

  const { data, error } = await sb
    .from(table)
    .select('*')
    .order(orderCol, { ascending });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

// POST /api/admin/data — { table, record }
export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  const body = await req.json();
  const { table, record } = body;

  if (!table || !isValidTable(table) || !record) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const sb = getServiceClient();
  const { data, error } = await sb.from(table).insert(record).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

// PUT /api/admin/data — { table, id, record }
export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  const body = await req.json();
  const { table, id, record } = body;

  if (!table || !isValidTable(table) || !id || !record) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const sb = getServiceClient();

  // For site_settings, update by key
  if (table === 'site_settings') {
    const { data, error } = await sb
      .from(table)
      .update({ value: record.value, updated_at: new Date().toISOString() })
      .eq('key', id)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  }

  const { data, error } = await sb.from(table).update(record).eq('id', id).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

// DELETE /api/admin/data — { table, id }
export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  const body = await req.json();
  const { table, id } = body;

  if (!table || !isValidTable(table) || !id) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const sb = getServiceClient();
  const { error } = await sb.from(table).delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
