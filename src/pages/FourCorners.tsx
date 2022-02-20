import { Container, Paper, Typography } from "@mui/material";

const data = {
  title: 'Four corners vintage',
  image: `${process.env.PUBLIC_URL}/static/collections/4c_banner.png`,
  summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.`,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
    Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
    Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.`
}

export default function FourCorners() {
  
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" align="center" sx={{ margin: '50px 0 20px 0', fontWeight: 'bold' }}>
        {data.title}
      </Typography>
      <Paper elevation={3} sx={{ padding: '5px', width: '75%', backgroundColor: 'black' }}>
        <img src={data.image} alt={data.image} style={{ width: '100%', height: 'auto' }}/>
      </Paper>
      <Paper elevation={3} sx={{ margin: '10px', padding: '10px' }}>
        <Typography align="justify" sx={{ margin: '5px 0', fontStyle: 'italic' }}>
          {data.summary}
        </Typography>
      </Paper>
      <Typography align="justify">
        {data.text}
      </Typography>
    </Container>
  );
}
