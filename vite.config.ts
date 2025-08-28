import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
// Pastikan asset path untuk produksi di root domain
base: "/",

// Dev server (boleh disesuaikan)
server: {
host: "0.0.0.0", // dengarkan semua interface (setara dengan "::" tapi lebih universal untuk IPv4/IPv6)
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

// Output modern namun tetap aman untuk banyak browser
build: {
target: "es2017",
modulePreload: false,
cssTarget: "chrome61",
// Optional: bersihkan warning besar
// outDir: "dist",
// sourcemap: false
},

esbuild: {
target: "es2017"
},

optimizeDeps: {
esbuildOptions: {
target: "es2017"
}
}

// Jika masih ada error "Unexpected token ?" dari dependency ESM/CJS campur,
// aktifkan opsi berikut:
// ssr: { noExternal: true }
});