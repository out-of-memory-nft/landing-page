import { Stack, Box, Typography } from "@mui/material"

interface NFTMarketingProps {
  margin?: string,
  data: [
    {
      name: string,
      imageFile?: string,
      imageUrl?: string,
      url: string,
      width?: string,
      height?: string,
    }
  ]
}

export default function BNFTMarketing(props: NFTMarketingProps) {
  return (
    <Box sx={{ width: '100%', margin: props.margin }}>
      <Typography>View event on:</Typography>
      <Stack direction='row' spacing={2} sx={{ justifyContent: 'center' }}>
        {props.data.map(data => 
          <a key={data.name} href={data.url} title={data.name} rel='noreferrer' target='_blank'>
            <img style={{ width: data.width, height: data.height }} src={getImageSrc(data.imageFile, data.imageUrl)} alt={data.name} />
          </a>)
        }
      </Stack>
    </Box>
  )
}

function getImageSrc(imageFile?: string, imageUrl?: string): string {
  return imageUrl ?? `${process.env.PUBLIC_URL}/static/marketing/${imageFile}`;
}
