import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
base: "/",
server: { host: "0.0.0.0", port: 8080 },
plugins: [react()],
resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
build: {
target: "es2017",
modulePreload: false,
cssTarget: "chrome61",
outDir: "dist",
assetsDir: "assets",
sourcemap: false
},
esbuild: { target: "es2017" },
optimizeDeps: { esbuildOptions: { target: "es2017" } }
});