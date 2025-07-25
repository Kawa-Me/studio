
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  // Lógica de login fictícia: aceita qualquer entrada desde que não esteja vazia.
  if (username && password) {
    const cookieStore = cookies();
    cookieStore.set('auth-token', 'valid-token-for-alpha-ascent', { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/' 
    });
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
