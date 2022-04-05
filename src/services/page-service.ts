import axios from 'axios';

const pages = [
  'lywaves',
  '4corners',
];

export interface PageData {
  title: string,
  titleShort: string,
  openSeaTarget: string,
  image: string,
  summary: string,
  techniques: string[],
  learnMore: string,
  blockId: string,
}

async function getPageData(name: string): Promise<PageData> {
  const res = await axios.get(`${process.env.PUBLIC_URL}/static/pages/${name}.json`);

  return res.data;
}

async function getAllPagesData(): Promise<PageData[]> {
  const responses = await Promise.all(pages.map(page => axios.get(`${process.env.PUBLIC_URL}/static/pages/${page}.json`)));

  return responses.map(res => res.data);
}

const service = {
  getPageData,
  getAllPagesData,
};

export default service;