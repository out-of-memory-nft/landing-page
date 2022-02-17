import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function AppTopBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexBasis: "100%", flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              OutOfMemoryNFT
            </Typography>
          </Box>
          <Box sx={{ flexBasis: "100%", flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <IconButton>
              <img alt="OpenSeaIcon" src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.svg" width="45" height="45"/>
            </IconButton>
          </Box>
          <Box sx={{ flexBasis: "100%", flexGrow: 1 }}>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}