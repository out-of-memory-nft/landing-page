import { useState, useEffect } from 'react';
import { Container, Paper, Typography, Box, Stack, CircularProgress } from "@mui/material";

import * as pageService from '../services/page-service';

interface PageData {
  title: string,
  image: string,
  summary: string,
  techniques: string[],
}

export default function FourCorners() {
  const [data, setData] = useState<PageData | null>(null);

  useEffect(() => {
    pageService.getPageData('4corners').then(page => setData(page));
  }, []);

  if (!data) {
    return (
      <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" align="center" sx={{ margin: '50px 0 20px 0', fontWeight: 'bold' }}>
        {data.title}
      </Typography>
      <Paper elevation={3} sx={{ padding: '5px', width: '75%', backgroundColor: 'black' }}>
        <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt={data.image} style={{ width: '100%', height: 'auto' }}/>
      </Paper>
      <Paper elevation={3} sx={{ margin: '10px', padding: '10px' }}>
        <Typography align="justify" sx={{ margin: '10px 0', fontStyle: 'italic' }}>
          {data.summary}
        </Typography>
      </Paper>

      <Typography align='justify' width='100%' sx={{ marginTop: '40px' }}>
        <b>Four Corners Vintage</b> started with the concept of combining gradients, by those means
        we developed the first two building blocks <b>Pixel Paint</b> and <b>Color Interpolation.</b>
      </Typography>
      {renderLayer('gradient', { marginTop: '20px', marginBottom: '10px' })}
      {renderSubtitle('Gradient generated by "Pixel Paint" and "Color Interpolation" building blocks')}
      
      <Typography align='justify' width='100%'>
        The first idea was creating individual randomized gradient colors, rotating and combining them using transparent layers.
      </Typography>
      <Stack direction='row' spacing={2} sx={{ marginTop: '20px', marginBottom: '10px' }}>
        {[0,1,2,3].map((id) => {
          return renderLayer(`problem_p${id}`, { key: id });
        })}
      </Stack>
      {renderSubtitle('Individual gradient layers rotated by "Rotation" building block')}

      <Typography align='justify' width='100%'>
        This is where the first problem arised, the layers order mattered and the last one was proeminent in image because it 
        overlaps 2 corners:
      </Typography>
      {renderLayer('overlap', { marginTop: '20px', marginBottom: '10px' })}
      {renderSubtitle('Resulting image, note the predominance of the last purple gradient')}
      
      <Typography align='justify' width='100%'>
        At this point we decided to try another approach though it looked nice but not enough, at least we knew that we were in the right direction.
        One considered option was implementing another core block called <b>Blend Modes</b>, but at the end we kept it for future releases and 
        choose an approach that didn't have overlapping, this is where the four corners concept was born.
      </Typography>
      
      <Typography align='justify' width='100%'>
        We still generate four gradients with randomize colors but starting from a single corner, rotate each one by a
        multiple of 90 degrees, resulting in four different images with a gradient on each corner.
      </Typography>
      
      <Typography align='justify' width='100%'>
        As minting lots of NFTs is not a simple task, we started simple by manually minting a small
        amount of them. As we created few artwork, we needed something to make them special, this is where the golden border and
        vintage concept arise.
      </Typography>

      <Typography align='justify' width='100%'>
        Wrapping everything up, we had those following image layers:
      </Typography>
      <Stack direction='row' spacing={2} sx={{ marginTop: '20px', marginBottom: '10px' }}>
        {[0,1,2,3,4].map((id) => {
          return renderLayer(`4c_p${id}`, { key: id });
        })}
      </Stack>
      {renderSubtitle('Individual corner gradient layers rotated by "Rotation" building block')}
      
      <Typography align='justify' width='100%'>
        When we combine all of them with a black background, they'd look like the following image:
      </Typography>
      {renderLayer('4c_example', { marginTop: '20px', marginBottom: '10px' })}
      {renderSubtitle('Resulting image using "Layers" building block')}

      
      <Typography align='justify' width='100%'>
        Thanks for coming with us through our entire collection concept process and stay tuned for our next release.
      </Typography>
      <Typography align='justify' width='100%' sx={{ marginTop: '100px'}}>
        OutOfMemory NFT team.
      </Typography>
      <Box sx={{ width: '100%', height: '200px' }} />
    </Container>
  );
}

function renderSubtitle(text: string) {
  return <Typography typography='subtitle1' align='center' sx={{ color: 'text.secondary', marginBottom: '20px' }}>{text}</Typography>
}

function renderLayer(name: string, extraProps: Object) {
  return <Box
    component='img'
    src={`${process.env.PUBLIC_URL}/static/collections/four-corners/${name}.png`}
    sx={{ width: '150px' }}
    {...extraProps}
  />
}