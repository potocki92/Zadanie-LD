import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { ModernNormalize } from "./global.styled.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModernNormalize />
    <App />
  </React.StrictMode>
);
