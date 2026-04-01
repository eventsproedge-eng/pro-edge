import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !email) {
      return NextResponse.json({ error: 'First name and email are required' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      // Fallback: log to console if Supabase isn't set up yet
      console.log('[Contact Form]', { firstName, lastName, email, message });
      return NextResponse.json({ success: true, message: 'Message received (dev mode)' });
    }

    const { error } = await supabase.from('contact_submissions').insert({
      first_name: firstName,
      last_name: lastName || null,
      email,
      message: message || null,
    });

    if (error) {
      console.error('[Contact Form Error]', error);
      return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('[Contact Form Error]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
