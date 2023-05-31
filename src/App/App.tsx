import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./view/Resume";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
