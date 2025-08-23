// Polyfill untuk Object.hasOwn (ES2022) agar aman di prerender/Chromium lama
// Harus diletakkan paling atas sebelum import lain
if (!(Object as any).hasOwn) {
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-extend-native
(Object as any).hasOwn = function (obj: any, prop: PropertyKey) {
if (obj == null) return false;
return Object.prototype.hasOwnProperty.call(Object(obj), prop);
};
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
<App />
</React.StrictMode>
);