import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppTopBar from './components/AppBar';
import { Home, About } from './pages';

export default function App() {
  return (
    <div>
      <AppTopBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
    
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
