
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;

  const { pathname } = request.nextUrl;

  // Se o usuário não está autenticado e tenta acessar qualquer rota exceto /login, redirecione para /login
  if (!authToken && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se o usuário está autenticado e tenta acessar /login, redirecione para a home
  if (authToken && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Se o usuário está autenticado e tenta acessar a raiz, reescreve para a página principal do app
  if (authToken && pathname === '/') {
    return NextResponse.rewrite(new URL('/app', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Evita que o middleware rode em rotas de api, arquivos estáticos, etc.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
