import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<div></div>}></Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
