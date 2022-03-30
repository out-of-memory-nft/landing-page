import React, { useEffect, useState } from "react";
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
import { theme } from './theme';
import GenericPage from "./pages/GenericPage";
import pageService, { PageData } from './services/page-service';

export default function App() {
  const [pages, setPages] = useState<PageData[]>([]);
  
  useEffect(() => {
    pageService.getAllPagesData().then(p => setPages(p));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppTopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {pages.map(page => {
            return (
              <Route key={page.blockId} path={`/collections/${page.learnMore}`} element={<GenericPage id={page.blockId} />}/>
            )
          })}
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}
