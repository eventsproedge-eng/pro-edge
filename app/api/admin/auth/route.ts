import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_TOKEN = 'proedge_admin_session';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { password } = body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json({ error: 'Admin password not configured' }, { status: 500 });
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  // Simple token: hash of password + date (not production-grade, but functional)
  const token = Buffer.from(`${adminPassword}:${Date.now()}`).toString('base64');

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_TOKEN, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(ADMIN_TOKEN);
  return response;
}
