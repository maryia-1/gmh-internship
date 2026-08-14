import { StrictMode } from "react";
import "./i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/manrope";
import App from "./App";
import { Toaster } from "sonner";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  </StrictMode>
);