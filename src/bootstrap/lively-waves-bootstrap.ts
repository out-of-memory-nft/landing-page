import { Stack } from '@mui/material';
import { registerBlock } from '../services/block-service';
import defaults from './defaults';

const blocks = [
  {
    id: '35c87213-1dd0-4483-8697-1e661bc7e92f',
    type: 'page',
    properties: {},
    content: [
      '1aeb8ec9-8c52-40aa-a51b-95a886a27484',
      'e16ff718-2f4d-41f6-ad5b-62f5b0f9c354',
      '5c875b42-ef8a-4104-bb7f-6e02092ebb17',
      'b04aafd8-16ef-49f2-8f1a-d1a85f3c723b',
    ],
  },
  {
    id: '1aeb8ec9-8c52-40aa-a51b-95a886a27484',
    type: 'h2',
    properties: {
      text: 'Lively waves',
      ...defaults.h2,
    },
    content: [],
  },
  {
    id: 'e16ff718-2f4d-41f6-ad5b-62f5b0f9c354',
    type: 'paper',
    properties: {
      elevation: 3,
      padding: '5px',
      width: '75%',
      backgroundColor: 'black',
    },
    content: ['ca4303fb-caba-4fbc-9c49-5695d7881c68'],
  },
  {
    id: 'ca4303fb-caba-4fbc-9c49-5695d7881c68',
    type: 'image',
    properties: {
      path: '/static/collections/4c_banner.png',
      width: '100%',
      height: 'auto',
    },
    content: [],
  },
  {
    id: '5c875b42-ef8a-4104-bb7f-6e02092ebb17',
    type: 'paper',
    properties: {
      elevation: 3,
      padding: '10px',
      margin: '10px',
    },
    content: ['23210613-17c7-48ce-b360-196b430c3f75'],
  },
  {
    id: '23210613-17c7-48ce-b360-196b430c3f75',
    type: 'text',
    properties: {
      text: '*Lively Waves is an animated collection where a strong small colorful circle starts at the center and slowly grows until eventually fade out and a new one starts the infinite cicle. A small amount of special NFT contains a compelling golden animated border*',
      margin: '10px 0',
      align: 'justify',
    },
    content: [],
  },
  {
    id: 'b04aafd8-16ef-49f2-8f1a-d1a85f3c723b',
    type: 'container',
    properties: {
      maxWidth: 'sm',
      margin: '40px 0 0 0',
    },
    content: [
      'b900cffc-dc03-42f0-a7c0-a20093b753de',
      'e5dbddb4-29f2-45ef-bd42-4b3479d647b3',
      '57d9cdcb-f665-4b7b-a6a7-f23aa4c30f69',

      // stack
      '6c376dbc-1e75-44cf-b5a8-2fdce2bd3ac6',
      'ec27427e-eaf8-4af7-9a8a-2d822479fdac',

      // circle
      '9f12e853-7566-41ef-a236-acc73279d075',
      'a7b4d781-5f00-48d1-bcdb-e31ae945f84f',
      '7131ceff-35cc-40a8-911b-a05e4ff59762',
      'a6fa7dae-a872-4599-9904-2f218f88bd7f',

      // before gif
      '0e2e0e7e-29f5-4edb-a808-8f9a310d22b6',
      '41888e70-b67f-4510-a7cd-fcdc47ce4b49',
      '1defa904-bb98-42f9-a3ee-6974701c4118',
      'de3c122c-a20e-45be-b351-2c577ecc2b35',

      // single wave gif
      '5a9f730d-5fbc-430f-91ca-a1161f6ea46f',
      '041b624a-5cfe-473b-83a8-df973413a228',

      // infinite loop
      '7990f5cf-bd2e-4a2c-b200-a0d18e069938',
      '61a9f43e-2a96-4bf4-9aa9-84df6e10e587',
      'f0d4beb1-065c-45d4-a7eb-929ec6d23bc6',

      // border
      'e48a4084-8304-4b09-8e66-0fa0544428f4',
      'ff054b8f-73b9-4b24-ae4d-bc9b6288a5f2',
      'e979afa9-899c-4ed6-9b59-3d1f0ddc736e',
      '56740e01-624c-4135-a493-9aa6777c2312',
      '2103a35d-0865-4d55-b295-011246a85b5d',
      'f27ecb15-f17f-411c-bd6a-115bdc0fdf1f',
      'c1a25c00-cc50-4984-9166-bca3fb3a33fc',
      'ab70f989-9a59-47d6-9235-26cdeaecbcc2',
      'a125b764-2668-46b8-b829-cde52501382f',
      '361edf94-416a-4543-aeb2-2135831e8dc3',
      '4ce7e597-2ad1-459d-9636-56a87b907504',
      '3dde8592-778b-4389-b965-8ad38bf9ab08',

      // ending
      '324bdaa2-52c7-4416-a14a-665cfeec2ded',
    ],
  },
  {
    id: 'b900cffc-dc03-42f0-a7c0-a20093b753de',
    type: 'text',
    properties: {
      text: '**LYWaves** initial concept was creating an animated NFT where the most important part lives in the center of the image (a lesson learned from our previous collection 4-corners)',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: 'e5dbddb4-29f2-45ef-bd42-4b3479d647b3',
    type: 'text',
    properties: {
      text: 'A circle fulfill this job and it might not be difficult to draw it using our **Pixel Paint** building block. We\'ll start talking a bit about math and coordinates.',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '57d9cdcb-f665-4b7b-a6a7-f23aa4c30f69',
    type: 'text',
    properties: {
      text: 'Basically every circle respect the following equation x² + y² = r² where *r* is the radius, *x* and *y* the coordinates.',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '6c376dbc-1e75-44cf-b5a8-2fdce2bd3ac6',
    type: 'stack',
    properties: {
      ...defaults.stack,
    },
    content: [
      '85a7ad33-25ee-4f19-a72c-7a59ccc38da3',
    ],
  },
  {
    id: '85a7ad33-25ee-4f19-a72c-7a59ccc38da3',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      width: defaults.image.width,
      height: defaults.image.height,
    },
    content: [],
  },
  {
    id: 'ec27427e-eaf8-4af7-9a8a-2d822479fdac',
    type: 'subtitle',
    properties: {
      text: 'Circle formula representation',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '9f12e853-7566-41ef-a236-acc73279d075',
    type: 'text',
    properties: {
      text: 'As our coordinate system starts at the top-left and we want to draw the circle in the center of the image, we need to transpose the center of our circle to the center of the image by modifying it like (s/2 + x)² + (s/2 + y)² = r² where *s* is the side of the image.',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: 'a7b4d781-5f00-48d1-bcdb-e31ae945f84f',
    type: 'text',
    properties: {
      text: 'The equation draws the circle border but we want to draw a filled circle, so we need to add it resulting in the final equation (s/2 + x)² + (s/2 + y)² <= r². We can translate it as: *given a radius, fill every pixel with coordinates (x,y) where the equation is true*. With this **Circle** building block, we can generate many circles like these:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '7131ceff-35cc-40a8-911b-a05e4ff59762',
    type: 'stack',
    properties: {
      ...defaults.stack, 
    },
    content: [
      'b5db8bff-d5ba-4d32-8c6d-06230c2e135c',
    ],
  },
  {
    id: 'b5db8bff-d5ba-4d32-8c6d-06230c2e135c',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      width: defaults.image.width,
      height: defaults.image.height,
    },
    content: [],
  },
  {
    id: 'a6fa7dae-a872-4599-9904-2f218f88bd7f',
    type: 'subtitle',
    properties: {
      text: 'Circles generated using building block',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '0e2e0e7e-29f5-4edb-a808-8f9a310d22b6',
    type: 'text',
    properties: {
      text: 'Adding the **Color Interpolation** we can make each subsequent circle slightly more transparent than the previous one',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '41888e70-b67f-4510-a7cd-fcdc47ce4b49',
    type: 'stack',
    properties: {
      ...defaults.stack,
    },
    content: [
      'b4c297eb-6722-4f03-92a5-cd8f491bddfc',
    ],
  },
  {
    id: 'b4c297eb-6722-4f03-92a5-cd8f491bddfc',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: '1defa904-bb98-42f9-a3ee-6974701c4118',
    type: 'subtitle',
    properties: {
      text: 'Generated circles using Circles and Color Interpolation',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: 'de3c122c-a20e-45be-b351-2c577ecc2b35',
    type: 'text',
    properties: {
      text: 'Using our **Layers* and newly **Gif** building block, we can generate an animated image by playing each layer at a fixed amount of time.',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '5a9f730d-5fbc-430f-91ca-a1161f6ea46f',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: '041b624a-5cfe-473b-83a8-df973413a228',
    type: 'subtitle',
    properties: {
      text: 'Animated NFT',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '7990f5cf-bd2e-4a2c-b200-a0d18e069938',
    type: 'text',
    properties: {
      text: 'Adding another wave at a different frame to create the infinite loop effect:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '61a9f43e-2a96-4bf4-9aa9-84df6e10e587',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: 'f0d4beb1-065c-45d4-a7eb-929ec6d23bc6',
    type: 'subtitle',
    properties: {
      text: 'Infinite animated loop',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: 'e48a4084-8304-4b09-8e66-0fa0544428f4',
    type: 'text',
    properties: {
      text: 'For the animated border, we first generate a list of points and group them in a way that each group represents a small bar of the border:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: 'ff054b8f-73b9-4b24-ae4d-bc9b6288a5f2',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: 'e979afa9-899c-4ed6-9b59-3d1f0ddc736e',
    type: 'subtitle',
    properties: {
      text: 'Group of points to draw border',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '56740e01-624c-4135-a493-9aa6777c2312',
    type: 'text',
    properties: {
      text: 'So it\'s a matter of selecting X groups each frame where each group is painted with a color generated by the **Color** Interpolation** the same way that we create a fading circle, we create a fading bar',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '2103a35d-0865-4d55-b295-011246a85b5d',
    type: 'stack',
    properties: {
      ...defaults.stack,
    },
    content: [
      'da4897aa-99e0-464f-9620-b8cc51a47f34',
    ],
  },
  {
    id: 'da4897aa-99e0-464f-9620-b8cc51a47f34',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: 'f27ecb15-f17f-411c-bd6a-115bdc0fdf1f',
    type: 'subtitle',
    properties: {
      text: 'Frames of animated border',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: 'c1a25c00-cc50-4984-9166-bca3fb3a33fc',
    type: 'text',
    properties: {
      text: 'Also using **Layers** and **Gif** we generate individual layers to combine later on in the resulting gif:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: 'ab70f989-9a59-47d6-9235-26cdeaecbcc2',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: 'a125b764-2668-46b8-b829-cde52501382f',
    type: 'subtitle',
    properties: {
      text: 'Border animated',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '361edf94-416a-4543-aeb2-2135831e8dc3',
    type: 'text',
    properties: {
      text: 'Having all pieces, we can use the **Merge** building block to combine each individual frame at X and them create our final and beautiful NFT:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '4ce7e597-2ad1-459d-9636-56a87b907504',
    type: 'image',
    properties: {
      path: '/static/collections/four-corners/problem_p0.png',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: '3dde8592-778b-4389-b965-8ad38bf9ab08',
    type: 'subtitle',
    properties: {
      text: 'Waves with border combined using Merge',
      ...defaults.subtitle,
    },
    content: [],
  },

  {
    id: '324bdaa2-52c7-4416-a14a-665cfeec2ded',
    type: 'box',
    properties: {
      width: '100%',
      margin: '30px 0 0 0',
      flex: {
        direction: 'column',
      }
    },
    content: [
      '439ce6d3-b067-45f3-9d13-456dcad5a629',
      '13eedf42-a1c8-48df-aa6c-2e0628deb856',
      'df723d60-9eaf-4d39-b777-e8407ef9ddbd',
      'ab3b370b-15cd-4024-ba0d-289d3dc1dd23',
      '0a196e1b-7941-4f2f-a896-098ad1d14aa4',
    ]
  },
  {
    id: '439ce6d3-b067-45f3-9d13-456dcad5a629',
    type: 'text',
    properties: {
      text: 'Thanks for coming with us through our entire collection'
    },
    content: [],
  },
  {
    id: '13eedf42-a1c8-48df-aa6c-2e0628deb856',
    type: 'text',
    properties: {
      text: 'concept process and stay tuned for our next release.',
      margin: '0 0 10px 0',
    },
    content: [],
  },
  {
    id: 'df723d60-9eaf-4d39-b777-e8407ef9ddbd',
    type: 'available-on-open-sea',
    properties: {
      target: 'collection/4-corners-vintage',
    },
    content: [],
  },
  {
    id: 'ab3b370b-15cd-4024-ba0d-289d3dc1dd23',
    type: 'text',
    properties: {
      text: 'OutOfMemory NFT team.',
      margin: '10px 0 0 0',
    },
    content: [],
  },
  {
    id: '0a196e1b-7941-4f2f-a896-098ad1d14aa4',
    type: 'box',
    properties: {
      width: '100%',
      height: '100px',
    },
    content: [],
  }
];

blocks.forEach((block) => registerBlock(block.id, block));
