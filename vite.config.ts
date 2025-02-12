import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
     plugins: [
          react(),
          tailwindcss(),
          VitePWA({
               // generates 'manifest.webmanifest' file on build
               includeAssets: [
                    "favicon.ico",
                    "apple-touch-icon.png",
                    "assets/*",
               ],
               manifest: {
                    // caches the assets/icons mentioned (assets/* includes all the assets present in your src/ directory)
                    name: "Simplifying Progressive Web App (PWA) Development with Vite: A Beginners Guide",
                    short_name: "TaskDo",
                    start_url: "/",
                    background_color: "#ffffff",
                    theme_color: "#000000",
                    icons: [
                         {
                              src: "/todo.png",
                              sizes: "192x192",
                              type: "image/png",
                         },
                         {
                              src: "/todo.png",
                              sizes: "512x512",
                              type: "image/png",
                         },
                    ],
               },
               workbox: {
                    // defining cached files formats
                    globPatterns: [
                         "**/*.{js,css,html,ico,png,svg,webmanifest}",
                    ],
               },
          }),
     ],
});
