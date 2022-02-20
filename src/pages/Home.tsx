import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { CollectionsCarousel } from '../components';

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "calc(100vh - 64px)", backgroundColor: "background.default" }}>
      <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center", paddingBottom: "64px" }}>  
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
   
              <Typography variant='h2' align='center' sx={{ fontWeight: 'bold' }}>
                Out of Memory NFT
              </Typography>
              <Typography variant='h5' align='center' sx={{ color: 'text.secondary', fontStyle: 'italic', margin: '15px 0px' }}>
                Have you ever thought if it is possible to create art using programming languages?
              </Typography>
              <Typography align='justify' sx={{ fontSize: 'h6.fontSize' }}>
                {getStyledSummary()}
              </Typography>
 
          </Grid>
          <Grid item lg={6} md={12}>
            <CollectionsCarousel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function getStyledSummary(): React.ReactNode {
  return (
    <React.Fragment>
      We are here to take you through a <span style={{ fontWeight: 'bold' }}>programming and art journey </span>
      where we <span style={{ fontWeight: 'bold' }}>implement and combine</span> core building blocks to
      create <span style={{ fontWeight: 'bold' }}>beautiful and compelling images</span>
    </React.Fragment>
  )
}