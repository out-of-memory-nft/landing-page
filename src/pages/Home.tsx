import { Box, Container, Grid, Typography } from '@mui/material';
import { CollectionsCarousel } from '../components';

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "calc(100vh - 64px)", backgroundColor: "background.default" }}>
      <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center", paddingBottom: "64px" }}>  
        <Grid container spacing={2}>
          <Grid item lg={6} md={12}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
              Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
              Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst. 
              Nulla euismod nunc a pellentesque hendrerit. Aliquam et velit ut ex suscipit blandit sit amet nec turpis. 
              Nunc justo sem, rutrum ut nisl pellentesque, dictum varius magna. Donec sit amet elementum nibh. 
              Phasellus arcu leo, condimentum eget turpis vitae, commodo pharetra erat. 
              Phasellus vestibulum quam tellus, ac dignissim libero viverra id. Aenean hendrerit mollis mi, in aliquet enim congue a.
              Sed maximus ex eu tempor consequat. Praesent rhoncus risus at tempus rutrum. Morbi luctus bibendum urna, vel tempor lacus iaculis sed.
              Praesent rutrum diam ut interdum vehicula. Donec bibendum eget metus non molestie. Quisque fermentum sit amet diam non tempus. 
              Maecenas aliquet in quam id lobortis. Fusce maximus ultricies augue, a hendrerit turpis tincidunt a. Nulla ac velit eu turpis luctus aliquet. 
              Sed feugiat tincidunt magna, vitae porttitor libero egestas at. Phasellus pharetra libero pharetra molestie venenatis. 
              Donec congue pulvinar tellus, at aliquam erat vulputate ut. 
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
