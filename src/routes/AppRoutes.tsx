import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Deu bom" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
