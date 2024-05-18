import { typePlace } from '../const';
const mockDestination = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description: `${typePlace[0]}, is a beautiful city, a true asian pearl, with crowded streets.`,
    name: typePlace[0],
    pictures: [
      {
        src: 'https://i.pinimg.com/originals/26/6d/24/266d240558e77ada1657a7ee3c4f71c7.jpg',
        description: `${typePlace[0]} parliament building`,
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    description: `${typePlace[1]}, is a beautiful city, a true asian pearl, with crowded streets.`,
    name: typePlace[1],
    pictures: [
      {
        src: 'https://avatars.mds.yandex.net/i?id=128152f41e0e1780b759748db366148c_l-5297754-images-thumbs&n=13',
        description: `${typePlace[1]} parliament building`,
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    description: `${typePlace[2]}, is a beautiful city, a true asian pearl, with crowded streets.`,
    name: typePlace[2],
    pictures: [
      {
        src: 'https://i.playground.ru/i/pix/1595126/image.jpg',
        description: `${typePlace[2]} parliament building`,
      }
    ],
  },
];

function getDestination(i) {
  return mockDestination[i];
}

export {getDestination};
