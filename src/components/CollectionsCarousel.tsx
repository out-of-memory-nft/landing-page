import { Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { Link as RouterLink } from 'react-router-dom';

export default function CollectionsCarousel() {
  const items = [
    {
      title: 'Four Corners Vintage',
      openSeaTarget: 'collection/4-corners-vintage',
      learnMore: '/collections/four-corners-vintage',
      image: `${process.env.PUBLIC_URL}/static/collections/4c_banner.png`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ornare augue, et venenatis leo. 
        Donec gravida dolor ut facilisis dignissim. Donec sagittis augue odio, ac laoreet leo egestas eget. 
        Duis vulputate urna sed sem iaculis dignissim. Donec feugiat mollis eleifend. In hac habitasse platea dictumst.`,
    },
    {
      title: 'Blank',
      openSeaTarget: '',
      learnMore: '',
      image: `${process.env.PUBLIC_URL}/static/collections/blank_banner.png`,
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
    openSeaTarget: string,
    learnMore: string,
    image: string,
    description: string,
  },
}

function Item(props: ItemProps) {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto" }}>
      <CardHeader sx={{ backgroundColor: 'primary.main' }} title={props.item.title} titleTypographyProps={{ variant:'h4', align: 'center', sx: { color: 'common.white' }}}/>
      <CardMedia
        component="img"
        alt={props.item.image}
        image={props.item.image}
        sx={{ minHeight: '200px' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ minHeight: '60px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href={`https://opensea.io/${props.item.openSeaTarget}`} title="Buy on OpenSea" rel='noreferrer' target='_blank'>
          <img style={{ height: '60px', borderRadius: '5px', boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)'}} src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20BW.png" alt="Available on OpenSea" />
        </a>

        <Button variant='contained' size='large' to={props.item.learnMore} component={RouterLink}>Learn More</Button>
      </CardActions>
    </Card>
  );
}