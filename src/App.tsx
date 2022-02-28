import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import './bootstrap';
import './App.css';
import AppTopBar from './components/AppBar';
import { Home, About } from './pages';
import FourCorners from "./pages/FourCorners";
import { theme } from './theme';
import GenericPage from "./components/GenericPage";

const pages = [
  {
    blockId: '29f856fe-11d2-426b-b68d-90480257c994'
  }
]

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppTopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections/four-corners-vintage" element={<FourCorners />} />
          <Route path='/generic' element={<GenericPage id={pages[0].blockId} />}/>
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}
