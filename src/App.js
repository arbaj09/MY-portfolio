import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import RootLayout from "./pages/root";
import About from "./pages/about";
import Project from "./pages/project";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index  element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
