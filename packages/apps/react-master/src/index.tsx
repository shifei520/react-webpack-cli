import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";
import "./index.css";

ReactDom.createRoot(document.getElementById("app")!).render(<App />);
