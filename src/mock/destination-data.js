import { getRandomElement } from '../util';
import { typePlace } from '../const';
const mockDestination = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description: `${getRandomElement(typePlace)}, is a beautiful city, a true asian pearl, with crowded streets.`,
    name: getRandomElement(typePlace),
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: `${getRandomElement(typePlace)} parliament building`,
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    description: `${getRandomElement(typePlace)}, is a beautiful city, a true asian pearl, with crowded streets.`,
    name: getRandomElement(typePlace),
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: `${getRandomElement(typePlace)} parliament building`,
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    description: `${getRandomElement(typePlace)}, is a beautiful city, a true asian pearl, with crowded streets.`,
    name: getRandomElement(typePlace),
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: `${getRandomElement(typePlace)} parliament building`,
      }
    ],
  },
];

function getRandomDestination() {
  return getRandomElement(mockDestination);
}

export {getRandomDestination};
