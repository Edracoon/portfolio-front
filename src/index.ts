import { serve } from "bun";
import index from "./index.html";

const server = serve({
    routes: {
        // Serve index.html for all unmatched routes.
        "/*": index,

        "/public/*": async (req) => {
            const url = new URL(req.url);
            const filePath = `.${url.pathname}`;
            const file = Bun.file(filePath);

            if (await file.exists())
                return new Response(file);
            return new Response("Not found", { status: 404 });
        }
    },

    development: process.env.NODE_ENV !== "production" && {
        // Enable browser hot reloading in development
        hmr: true,

        // Echo console logs from the browser to the server
        console: true,
    },
});

console.log(`🚀 Server running at ${server.url}`);
