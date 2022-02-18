import { Container, Paper, Typography } from "@mui/material";

const data = {
  title: 'Four corners vintage',
  image: `${process.env.PUBLIC_URL}/static/collections/4c_featured.png`,
  summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.`
}

export default function FourCorners() {
  
  return (
    <Container maxWidth="md">
      <Typography variant="h1">
        {data.title}
      </Typography>
      <Paper elevation={3}>
        <img src={data.image} alt={data.image}/>
      </Paper>
      <Typography align="justify">
        {data.summary}
      </Typography>
    </Container>
  );
}
