import axios from 'axios';

export async function getPageData(name: string) {
  const res = await axios.get(`/static/pages/${name}.json`);

  return res.data;
}