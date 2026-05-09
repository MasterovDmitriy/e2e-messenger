import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "2rem",
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        backgroundColor: "#0f172a",
        color: "#e2e8f0",
      }}
    >
      <h1 style={{ margin: 0, marginBottom: "1rem" }}>E2E Messenger</h1>
      <p style={{ margin: 0, color: "#94a3b8" }}>
        Frontend bootstrap is ready. Next step: authentication flow.
      </p>
    </div>
  </React.StrictMode>,
);
