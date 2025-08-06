import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Tambahkan redirect logic di sini
const redirectedPath = sessionStorage.redirect;
if (redirectedPath) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirectedPath);
}

createRoot(document.getElementById("root")!).render(<App />);
