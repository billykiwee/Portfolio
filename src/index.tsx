import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import "../src/App/css/app.scss";

const element = document.getElementById("root");

if (element) {
  ReactDOM.createRoot(element).render(<App />);
}
