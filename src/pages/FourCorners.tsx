import { Container, Paper, Typography, Box } from "@mui/material";

const data = {
  title: 'Four corners vintage',
  image: `${process.env.PUBLIC_URL}/static/collections/4c_banner.png`,
  summary: `Four Corners Vintage starts with a black filled background where four randomized colors at each corner 
    starts and gently fades away as far as you go from it creating a gradient effect which is them framed by a nice
    and beautiful golden border.`,
  techniques: ['Pixel paint', 'Color interpolation', 'Layers', 'Rotation'],
  text: `
    Pixel paint and color interpolation allow us to create simple linear gradients 
    <gradient image>
    The first idea was creating individual randomized gradient colors, rotating and combining them using transparent layers.
    <individual layers>

    This is where the first problem arise, the layers order mattered and the last one was proeminent in image because it 
    overlaps 2 corners.
    <problem>

    At this point we could implement another core block called Blend Modes, but we decided to
    keep it for future releases and choose an approach that didn't have overlaping, this is where four corners was born

    We generate four gradients with randomize colors starting from a single corner, rotate each one by a
    multiple of 90 degrees, resulting in four different images each one with a gradient on each corner.

    As minting lots of NFTs is not a simple task, we decided to start simple by manually minting a small
    amount of them, so we needed something to make them special, this is where the golden border and vintage
    was born.

    Wrapping everything up, we had those following image layers which were combined into a single one:
    <images>

    Stay tuned to next collection release.
    OutOfMemory NFT team`
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
        <Typography align="justify" sx={{ margin: '10px 0', fontStyle: 'italic' }}>
          {data.summary}
        </Typography>
      </Paper>
      <Typography align='justify' width='100%' sx={{ marginTop: '5px' }}>
        Four Corners Vintage started with the concept of combining gradients, by those means
        we developed the first two building blocks: Pixel Paint and Color Interpolation
      </Typography>
      <Box sx={{ width: '400px', height: '80px', background: 'gray', margin: '20px'}} />
      <Typography align='justify' width='100%'>
        The first idea was creating individual randomized gradient colors, rotating and combining them using transparent layers.
        This is where the first problem arised, the layers order mattered and the last one was proeminent in image because it 
        overlaps 2 corners:
      </Typography>
      <Box sx={{ width: '400px', height: '80px', background: 'gray', margin: '20px'}} />
      <Typography align='justify' width='100%'>
        At this point we could implement another core block called Blend Modes, but we decided to
        keep it for future releases and choose an approach that didn't have overlaping, this is where four corners was born.<br/>

        We generate four gradients with randomize colors starting from a single corner, rotate each one by a
        multiple of 90 degrees, resulting in four different images with a gradient on each corner.<br/>

        As minting lots of NFTs is not a simple task, we also decided to start simple by manually minting a small
        amount of them, so we needed something to make them special, this is where the golden border and vintage
        was born.<br/>

        Wrapping everything up, we had those following image layers which were combined into a single one:
      </Typography>
      <Box sx={{ width: '400px', height: '80px', background: 'gray', margin: '20px'}} />

      <Typography align='justify' width='100%'>
        Stay tuned to next collection release.<br/>
        OutOfMemory NFT team
      </Typography>
      <Box sx={{ width: '100%', height: '200px' }} />
    </Container>
  );
}
