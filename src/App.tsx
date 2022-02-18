import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AppTopBar from './components/AppBar';
import { Home, About } from './pages';
import FourCorners from "./pages/FourCorners";

export default function App() {
  return (
    <div>
      <Router>
        <AppTopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/four-corners-vintage" element={<FourCorners />} />
        </Routes>
      </Router>
    </div>
    
  );
}
