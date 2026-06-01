import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals, request }) => {
  // @ts-ignore - locals.auth() is injected by Clerk middleware
  const auth = locals.auth?.();
  
  console.log('--- Debug API ---');
  console.log('Headers:', Object.fromEntries(request.headers.entries()));
  console.log('Auth Object:', auth);
  
  if (!auth?.userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized', auth }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ 
    message: 'This is a protected backend endpoint', 
    userId: auth.userId 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
