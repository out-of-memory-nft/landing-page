import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, AppBar, Box, Toolbar, IconButton, Typography, Tooltip } from '@mui/material';

import pageService, { PageData } from '../services/page-service';

export default function AppTopBar() {
  const [pages, setPages] = useState<PageData[]>([]);
  
  useEffect(() => {
    pageService.getAllPagesData().then(p => setPages(p));
  }, []);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexBasis: "100%", flexGrow: 1, display: "flex", alignItems: 'center' }}>
            <Link to="/" color="inherit" underline="none" sx={{ marginLeft: "10px", display: 'flex', alignItems: 'center' }} component={RouterLink}>
              <Box width='45px' height='45px' src={`${process.env.PUBLIC_URL}/static/outofmemory/out_of_memory_dark_avatar.png`} component='img' />
              <Typography align='center' sx={{ fontWeigth: 'bold' }}>OutOfMemoryNFT</Typography>
            </Link>
            {pages.map(page => {
              return (
                <Link key={page.blockId} to={`/collections/${page.learnMore}`} color="inherit" underline="none" sx={{ marginLeft: "10px" }} component={RouterLink}>
                  <Typography align='center'>{page.titleShort}</Typography>
                </Link>
              )
            })}
          </Box>
          <Box sx={{ flexBasis: "100%", flexGrow: 1, display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <Tooltip title='View OutOfMemoryNFT on OpenSea'>
              <IconButton>
                <a href='https://opensea.io/OutOfMemoryNFT' title="Buy on OpenSea" rel='noreferrer' target='_blank' style={{ width: '45px', height: '45px' }}>
                  <img alt="OpenSeaIcon" src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg" style={{ width: '100%' }}/>
                </a>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexBasis: "100%", flexGrow: 1 }}>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}