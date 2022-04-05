import { Stack, Box, Typography } from "@mui/material"

interface NFTMarketingProps {
  margin?: string,
  data: [
    {
      name: string,
      imageFile: string,
      url: string,
    }
  ]
}

export default function BNFTMarketing(props: NFTMarketingProps) {
  return (
    <Box sx={{ width: '100%', margin: props.margin }}>
      <Typography>View event on:</Typography>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        {props.data.map(data => 
          <a key={data.name} href={data.url} title={data.name} rel='noreferrer' target='_blank'>
            <img style={{ width: '150px' }} src={`${process.env.PUBLIC_URL}/static/marketing/${data.imageFile}`} alt={data.name} />
          </a>)
        }
      </Stack>
    </Box>
  )
}
