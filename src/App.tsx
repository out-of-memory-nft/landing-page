import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import AppTopBar from './components/AppBar';
import { Home, About } from './pages';
import FourCorners from "./pages/FourCorners";
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppTopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/four-corners-vintage" element={<FourCorners />} />
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}
