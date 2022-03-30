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
    ],
  },
];

blocks.forEach((block) => registerBlock(block.id, block));

`
LYWaves initial concept was create an animated NFT where the most important part lives
in the center of the image (a lesson learned from our previous collection 4-corners)

A circle fulfill this job and it might not be difficult to draw it using our **Pixel Paint**
building block. We'll start talking a bit about math and coordinates.
Basically every circle respect the following equation x² + y² = r² where *r* is the radius,
*x* and *y* the coordinates. 

<Imagem with math behind>

As our coordinate system starts at the top-left and we want
to draw the circle in the center of the image, we need to transpose the center of our
circle to the center of the image by modifying it like (s/2 + x)² + (s/2 + y)² = r² where *s*
is the side of the image.
The equation draws the circle border but we want to draw a filled circle, so we need to
add it resulting in the final equation:
(s/2 + x)² + (s/2 + y)² <= r² 
We can translate it as: *given a radius, fill every pixel with coordinates (x,y) where
the equation is true*

With this **Circle** building block, we can generate many circles like these:
<circles>

Adding the **Color Interpolation** we can make each subsequent circle slightly
more transparent than the previous one
<circles> 

Using our **Layers* and newly **Gif** building block, we can generate an
animated image by playing each layer at a fixed amount of time
<circle gif>

Adding another wave at a different frame to create the infinite loop effect:
<infinite gif>


For the animated border, we first generate a list of points and group them in a way
that each group represents a small bar of the border:
<points example>

so it's a matter of selecting X groups each frame where each group is painted with a color generated by the **Color
Interpolation** the same way that we create a fading circle, we create a fading bar
<bar frames at 0 10 20>

Also using **Layers** and **Gif** we generate individual layers to combine later on
in the resulting gif:
<border gif>

Having all pieces, we can use the **Merge** building block to combine each individual
frame at X and them create our final and beautiful NFT:
<final gif>
`