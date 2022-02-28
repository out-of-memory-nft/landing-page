import { registerBlock } from '../services/block-service';

const staticUuids = [
  
  '0ce0eb27-52c9-417c-9835-d729c8049588',
  'bd717c36-6ffb-4523-b6d3-17acce44f8bc',
  '5924407a-a55e-4ea6-85b5-c34c5e0c1954',
  '23792262-07ac-4962-b29f-6893bfec20af',
  'be40ea98-f506-49cd-90d8-41ff2b47c481',
  '807e820e-5729-4e1c-9c2f-c6c5f0a4f376',
  'f3106a61-2767-4825-8e12-f04d440e6447',
  '1d16db03-16e0-4c83-a7ca-69e6c5797007',
  '9716e807-fa87-49b1-b041-f5fc74fe3f0f',
  '50474246-0f95-40ea-8e00-0f4e4e066afc',
  '6e08ae59-eed0-435c-9271-0f8fb850e276',
  '3aaa7ac6-89e3-4665-ad72-99d28384c9ad',
  '2b468067-9cab-40a3-a772-d7f2b8b800a6',
  '0d0d4c62-c473-4779-8b9c-60193e5539ad',
];

const blocks = [
  {
    id: '29f856fe-11d2-426b-b68d-90480257c994',
    type: 'page',
    properties: {},
    content: [
      '12133a9a-3d9f-4b61-bd5c-bf4d05718869',
      '1d99ac24-65ae-410d-bf75-d83fc6a12f15',
      '38f0ac4f-d17c-4ea1-ac41-f6002a2afbbf',
    ],
  },
  {
    id: '12133a9a-3d9f-4b61-bd5c-bf4d05718869',
    type: 'h2',
    properties: {
      text: 'Four Corners Vintage'
    },
    content: [],
  },
  {
    id: '1d99ac24-65ae-410d-bf75-d83fc6a12f15',
    type: 'paper',
    properties: {
      elevation: 3,
      padding: '5px',
      width: '75%',
      backgroundColor: 'black',
    },
    content: ['5df82f2a-2c0f-454c-9de3-f363fae61627'],
  },
  {
    id: '5df82f2a-2c0f-454c-9de3-f363fae61627',
    type: 'image',
    properties: {
      path: '/static/collections/4c_banner.png',
      width: '100%',
      height: 'auto',
    },
    content: [],
  },
  {
    id: '38f0ac4f-d17c-4ea1-ac41-f6002a2afbbf',
    type: 'paper',
    properties: {
      elevation: 3,
      padding: '10px',
      margin: '10px',
    },
    content: ['ede68c8c-904f-4250-942c-3d10fa66904f'],
  },
  {
    id: 'ede68c8c-904f-4250-942c-3d10fa66904f',
    type: 'text',
    properties: {
      text: '*Four Corners Vintage starts with a black filled background where four randomized colors at each corner starts and gently fades away as far as you go from it creating a gradient effect which is them framed by a nice and beautiful golden border.*',
      margin: '10px 0',
    },
    content: [],
  },
];

blocks.forEach((block) => registerBlock(block.id, block));

