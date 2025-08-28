import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
base: "/", // deploy di root domain
server: {
host: "0.0.0.0",
port: 8080
},
plugins: [react()],
resolve: {
alias: {
"@": path.resolve(__dirname, "./src")
}
},
build: {
target: "es2017",
modulePreload: false,
cssTarget: "chrome61",
outDir: "dist", // pastikan deploy folder ini
assetsDir: "assets", // default, eksplisitkan saja
sourcemap: false
},
esbuild: { target: "es2017" },
optimizeDeps: { esbuildOptions: { target: "es2017" } }
// Jika ada error “Unexpected token ?” dari dependency:
// ssr: { noExternal: true }
});