import axios from 'axios';

const pages = [
  '4corners',
];

// TODO fix those types

export interface SummaryData {
  title: string,
  openSeaTarget: string,
  learnMore: string,
  image: string,
  summary: string,
}

export interface PageData {
  title: string,
  image: string,
  summary: string,
  techniques: string[],
}

async function getPageData(name: string): Promise<any> {
  const res = await axios.get(`/static/pages/${name}.json`);

  return res.data;
}

async function getAllPagesData(): Promise<any[]> {
  const responses = await Promise.all(pages.map(page => axios.get(`/static/pages/${page}.json`)));

  return responses.map(res => res.data);
}

const service = {
  getPageData,
  getAllPagesData,
};

export default service;