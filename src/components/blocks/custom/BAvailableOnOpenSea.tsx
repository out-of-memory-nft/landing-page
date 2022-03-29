
interface OpenSeaProps {
  target: string,
}

const BAvailableOnOpenSea = (props: OpenSeaProps) => {
  return (
    <a href={`https://opensea.io/${props.target}`} title="Buy on OpenSea" rel='noreferrer' target='_blank'>
      <img style={{ height: '60px', borderRadius: '5px', boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)'}} src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20BW.png" alt="Available on OpenSea" />
    </a>
  )
}

export default BAvailableOnOpenSea;
