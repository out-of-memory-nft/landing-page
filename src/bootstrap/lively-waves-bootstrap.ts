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
      '9c08fa22-4cc6-4d00-935b-13bdd98ae9f5',
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
      path: '/static/collections/lively-waves/lywaves-banner.gif',
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
      text: '*Lively Waves is an animated collection where a strong small colorful circle starts at the center and slowly grows until eventually fade out restarting the loop cycle. A small amount of special NFT contains a compelling golden animated border*',
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

      // Drawing circle
      '6c376dbc-1e75-44cf-b5a8-2fdce2bd3ac6',
      'ec27427e-eaf8-4af7-9a8a-2d822479fdac',
      '31b9be57-de6f-49ae-92c4-908afcfe3922',
      '76d1f0fa-ed45-4f1c-bc24-2a9fc9632987',
      '23c94975-c1cf-4f73-a316-df93a60b3ad1',

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

      // anti-aliased gif
      '436182ae-4e68-40b3-9bc3-e58b3b601f85',
      '2d980e23-602d-415b-8a4c-8f4c2eec554f',
      'b6e89a31-af03-4284-a77b-42ab5c95ad82',

      // infinite loop
      '7990f5cf-bd2e-4a2c-b200-a0d18e069938',
      '61a9f43e-2a96-4bf4-9aa9-84df6e10e587',
      'f0d4beb1-065c-45d4-a7eb-929ec6d23bc6',

      // border
      'e48a4084-8304-4b09-8e66-0fa0544428f4',
      'ff054b8f-73b9-4b24-ae4d-bc9b6288a5f2',
      'e979afa9-899c-4ed6-9b59-3d1f0ddc736e',
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
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle.png',
      width: '80%',
      height: 'auto',
      margin: defaults.image.margin,
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
    id: '31b9be57-de6f-49ae-92c4-908afcfe3922',
    type: 'text',
    properties: {
      text: 'The above formula only represents and draw the circle outline, as we want to fill in an unique color, we need to consider all pixels inside it with the formula: x² + y² <= r²',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '76d1f0fa-ed45-4f1c-bc24-2a9fc9632987',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/inside-circle.png',
      width: '80%',
      height: 'auto',
      margin: defaults.image.margin,
    },
    content: [],
  },
  {
    id: '23c94975-c1cf-4f73-a316-df93a60b3ad1',
    type: 'subtitle',
    properties: {
      text: 'Outline and inside circle points formula representation',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '9f12e853-7566-41ef-a236-acc73279d075',
    type: 'text',
    properties: {
      text: 'As our coordinate system starts at the top-left and we want to draw the circle in the center of the image, we need to transpose the center of our circle to the center of the image by modifying it like (s/2 + x)² + (s/2 + y)² <= r² where *s* is the side of the image.',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: 'a7b4d781-5f00-48d1-bcdb-e31ae945f84f',
    type: 'text',
    properties: {
      text: 'We can translate it as: *given a radius, fill every pixel with coordinates (x,y) where the equation is true*. This is our new **Circle** building block which we can use to generate many circles like these:',
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
      'f2066043-c149-4d21-8b5f-9f384d45eb65',
      'fd2a9678-ffe7-453a-9b53-6358bec00fa7',
      '95c8ec42-1a3c-44a9-aa32-9115c2effe71',
    ],
  },
  {
    id: 'b5db8bff-d5ba-4d32-8c6d-06230c2e135c',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_simple_0.png',
      width: defaults.image.width,
    },
    content: [],
  },
  {
    id: 'f2066043-c149-4d21-8b5f-9f384d45eb65',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_simple_1.png',
      width: defaults.image.width,
    },
    content: [],
  },
  {
    id: 'fd2a9678-ffe7-453a-9b53-6358bec00fa7',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_simple_2.png',
      width: defaults.image.width,
    },
    content: [],
  },
  {
    id: '95c8ec42-1a3c-44a9-aa32-9115c2effe71',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_simple_3.png',
      width: defaults.image.width,
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
      'c388e798-d851-4e90-920d-a08107248846',
      '0e18dda8-253a-4eac-a528-3ad7dee16c39',
      '8855148d-486e-4e35-a68f-fd8375a2818f',
    ],
  },
  {
    id: 'b4c297eb-6722-4f03-92a5-cd8f491bddfc',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_color_0.png',
      width: defaults.image.width,
    },
    content: [],
  },
  {
    id: 'c388e798-d851-4e90-920d-a08107248846',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_color_1.png',
      width: defaults.image.width,
    },
    content: [],
  },
  {
    id: '0e18dda8-253a-4eac-a528-3ad7dee16c39',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_color_2.png',
      width: defaults.image.width,
    },
    content: [],
  },
  {
    id: '8855148d-486e-4e35-a68f-fd8375a2818f',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/circle_color_3.png',
      width: defaults.image.width,
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
      text: 'Using our **Layers** and newly **Gif** building block, we can generate an animated image by playing each layer at a fixed amount of time.',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '5a9f730d-5fbc-430f-91ca-a1161f6ea46f',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/wave-no-anti-aliased.gif',
      width: '300px',
      margin: defaults.image.margin,
    },
    content: [],
  },
  {
    id: '041b624a-5cfe-473b-83a8-df973413a228',
    type: 'subtitle',
    properties: {
      text: 'Single wave animated',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '436182ae-4e68-40b3-9bc3-e58b3b601f85',
    type: 'text',
    properties: {
      text: 'If we take a closer look, we can notice a rough edge on the circle. In high quality images, this kind of curved edge has a smooth color transition achieved by applying a technique called anti-aliasing. In order to achieve this, we simply generate a bigger image and resize it to the desired size:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '2d980e23-602d-415b-8a4c-8f4c2eec554f',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/wave-anti-aliased.gif',
      width: '300px',
      margin: defaults.image.margin,
    },
    content: [],
  },
  {
    id: 'b6e89a31-af03-4284-a77b-42ab5c95ad82',
    type: 'subtitle',
    properties: {
      text: 'Single wave animated and anti-aliased',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '7990f5cf-bd2e-4a2c-b200-a0d18e069938',
    type: 'text',
    properties: {
      text: 'Adding another shifted wave animation in a way that when the first is starting, the second is in middle, when the first is in the middle, the second is at the end and finally when the first is finishing, the second is at the beginning. By repeating this entire animation once it finishes, it creates an infinite loop effect:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '61a9f43e-2a96-4bf4-9aa9-84df6e10e587',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/wave-perfecto.gif',
      width: '300px',
      margin: defaults.image.margin,
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
      text: 'For the animated border, we\'ll cover the implementation later in another page, but the final animated border:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: 'ff054b8f-73b9-4b24-ae4d-bc9b6288a5f2',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/border.gif',
      ...defaults.image,
    },
    content: [],
  },
  {
    id: 'e979afa9-899c-4ed6-9b59-3d1f0ddc736e',
    type: 'subtitle',
    properties: {
      text: 'Animated border',
      ...defaults.subtitle,
    },
    content: [],
  },
  {
    id: '361edf94-416a-4543-aeb2-2135831e8dc3',
    type: 'text',
    properties: {
      text: 'Having all pieces, we can use the **Merge** building block to combine each individual frame at X and them create our final and beautiful animated image:',
      ...defaults.text,
    },
    content: [],
  },
  {
    id: '4ce7e597-2ad1-459d-9636-56a87b907504',
    type: 'image',
    properties: {
      path: '/static/collections/lively-waves/wave-final.gif',
      width: '300px',
      margin: defaults.image.margin,
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
      height: '200px',
    },
    content: [],
  },
  {
    id: '9c08fa22-4cc6-4d00-935b-13bdd98ae9f5',
    type: 'nft-marketing',
    properties: {
      data: [
        {
          name: 'NFT Calendar',
          imageFile: 'nft-calendar.png',
          url: 'https://nftcalendar.io/event/four-corners-vintage-by-outofmemorynft/'
        }
      ],
    },
    content: [],
  }
];

blocks.forEach((block) => registerBlock(block.id, block));
