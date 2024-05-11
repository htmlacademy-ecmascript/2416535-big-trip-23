import { getRandomElement } from '../util';

const offers = [
  {
    type: 'Taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Take a comfort class',
        price: 10
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'add luggage',
        price: 10
      }
    ]
  },
  {
    type: 'Flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa34',
        title: 'Upgrade to a business class',
        price: 100
      }
    ]
  },
  {
    type: 'Sheep',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
        title: 'unlimited minibar',
        price: 15
      }
    ]
  },
];

function getOffer() {
  return getRandomElement(offers);
}

export {getOffer};
