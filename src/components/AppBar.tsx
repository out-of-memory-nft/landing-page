import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, AppBar, Box, Toolbar, IconButton } from '@mui/material';

export default function AppTopBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexBasis: "100%", flexGrow: 1, display: "flex" }}>
          {/* <Avatar alt="OutOfMemoryIcon" src={`${process.env.PUBLIC_URL}/static/outofmemory/out_of_memory_icon_black.png`} /> */}
            <Link to="/" color="inherit" underline="none" sx={{ marginLeft: "10px" }} component={RouterLink}>
              OutOfMemoryNFT
            </Link>
            <Link to="/collections/four-corners-vintage" color="inherit" underline="none" sx={{ marginLeft: "10px" }} component={RouterLink}>
              4C Vintage
            </Link>
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