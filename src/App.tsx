import { log } from "console";
import React from "react";
import MainAnimePage from "./pages/mainPage";
import DetailedAnimePage from "./pages/detailedAnimePage";
import "./style/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainAnimePage />} />
          <Route path="anime/:id" element={<DetailedAnimePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
