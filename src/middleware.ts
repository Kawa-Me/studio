
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;

  const { pathname } = request.nextUrl;

  const isPublicPath = pathname === '/login';
  const isProtectedRoute = !isPublicPath;

  // Se o usuário não está autenticado e tenta acessar uma rota protegida
  if (!authToken && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se o usuário está autenticado e tenta acessar a página de login
  if (authToken && isPublicPath) {
    return NextResponse.redirect(new URL('/app', request.url));
  }
  
  // Se o usuário está autenticado e acessa a raiz, redireciona para a home do app
  if (authToken && pathname === '/') {
    return NextResponse.redirect(new URL('/app', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Evita que o middleware rode em rotas de api, arquivos estáticos, etc.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
