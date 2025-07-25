
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  // Corrigido: Usando os valores diretamente em vez de variáveis de ambiente não definidas.
  if (username === "Alpha" && password === "Alpha123") {
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
