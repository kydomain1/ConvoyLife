// Cloudflare Pages Functions Middleware for SPA routing
export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Skip middleware for static assets
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  ) {
    return context.next();
  }
  
  // For all other routes, serve index.html to enable client-side routing
  if (!url.pathname.match(/\.\w+$/)) {
    return context.env.ASSETS.fetch(new URL('/index.html', url.origin));
  }
  
  return context.next();
}

