import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"

export default function CollectionsCarousel() {
  const items = [
    {
      title: 'Four Corners Vintage (4C)',
      image: `${process.env.PUBLIC_URL}/static/collections/4c_featured.png`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
        Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
        Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.`,
    },
    {
      title: 'Blank',
      image: `${process.env.PUBLIC_URL}/static/collections/blank.png`,
      description: `Nulla euismod nunc a pellentesque hendrerit. Aliquam et velit ut ex suscipit blandit sit amet nec turpis. 
        Nunc justo sem, rutrum ut nisl pellentesque, dictum varius magna. Donec sit amet elementum nibh. 
        Phasellus arcu leo, condimentum eget turpis vitae, commodo pharetra erat. `,
    },
  ];

  return (
    <Carousel swipe={false}>
      {items.map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
  )
}

interface ItemProps {
  item: {
    title: string,
    image: string,
    description: string,
  },
}

function Item(props: ItemProps) {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto" }}>
      <CardMedia
        component="img"
        alt={props.item.image}
        image={props.item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}