
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;
  const { pathname } = request.nextUrl;

  const isPublicPath = pathname === '/login';
  const isAppPath = pathname.startsWith('/app');

  // Se o usuário não está logado e tenta acessar uma rota protegida (/app/*)
  if (!authToken && isAppPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se o usuário está logado e tenta acessar a página de login
  if (authToken && isPublicPath) {
    return NextResponse.redirect(new URL('/app', request.url));
  }
  
  // Se o usuário acessa a raiz, e não está logado, vai para o login. Se estiver, vai para /app.
  if (pathname === '/') {
    if (authToken) {
      return NextResponse.redirect(new URL('/app', request.url));
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Evita que o middleware rode em rotas de api, arquivos estáticos, etc.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
