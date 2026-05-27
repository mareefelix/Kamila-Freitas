import server from "../../dist/server/server.js";

export default async (request, context) => {
  try {
    return await server.fetch(request, {}, {});
  } catch (error) {
    console.error("Netlify Function SSR Error:", error);
    return new Response(
      `<html>
        <head>
          <title>Internal Server Error</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 2rem; background: #fafafa; color: #111; max-width: 32rem; margin: auto; }
            h1 { font-size: 1.5rem; }
            pre { background: #eee; padding: 1rem; border-radius: 4px; overflow-x: auto; }
          </style>
        </head>
        <body>
          <h1>Internal Server Error</h1>
          <p>The TanStack Start server encountered an issue compiling the request.</p>
          <pre>${error.stack || error}</pre>
        </body>
      </html>`,
      {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      },
    );
  }
};
