import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
base: "/",
server: {
host: "::",
port: 8080
},
plugins: [
react()
],
resolve: {
alias: {
"@": path.resolve(__dirname, "./src")
}
},
build: {
target: "es2017",
modulePreload: false,
cssTarget: "chrome61"
},
esbuild: {
target: "es2017"
},
optimizeDeps: {
esbuildOptions: {
target: "es2017"
}
}
// Jika masih ada error “Unexpected token ?”, aktifkan baris berikut:
// ,ssr: { noExternal: true }
});