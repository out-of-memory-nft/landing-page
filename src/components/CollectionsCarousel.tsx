import { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader, Box, CircularProgress } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { Link as RouterLink } from 'react-router-dom';

import pageService, { SummaryData } from '../services/page-service';

export default function CollectionsCarousel() {
  const [items, setItems] = useState<SummaryData[] | null>(null);

  useEffect(() => {
    pageService.getAllPagesData().then((pages) => setItems(pages));
  }, []);

  if (!items) {
    return (
      <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Carousel swipe={false}>
      {items.map((item, i) => <Item key={i} {...item} />)}
    </Carousel>
  )
}

function Item(item: SummaryData) {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto" }}>
      <CardHeader sx={{ backgroundColor: 'primary.main' }} title={item.title} titleTypographyProps={{ variant:'h4', align: 'center', sx: { color: 'common.white' }}}/>
      <CardMedia
        component="img"
        alt={item.image}
        image={`${process.env.PUBLIC_URL}/${item.image}`}
        sx={{ minHeight: '200px' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ minHeight: '60px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href={`https://opensea.io/${item.openSeaTarget}`} title="Buy on OpenSea" rel='noreferrer' target='_blank'>
          <img style={{ height: '60px', borderRadius: '5px', boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)'}} src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20BW.png" alt="Available on OpenSea" />
        </a>

        <Button variant='contained' size='large' to={item.learnMore} component={RouterLink}>Learn More</Button>
      </CardActions>
    </Card>
  );
}