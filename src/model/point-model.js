import { getRandomPoint } from '../mock/point-data';
import { getDestination } from '../mock/destination-data';
import { getOffer } from '../mock/offer-data.js';

const MAX_POINTS = 3;
export default class PointModel {
  points = Array.from({ length: MAX_POINTS }, getRandomPoint);
  getPoints() {
    return this.points;
  }

  getDestinations() {
    const destinations = [];
    for (let i = 0; i < MAX_POINTS; i++){
      destinations.push(getDestination(i));
    }
    return destinations;
  }

  getOffers() {
    return getOffer();
  }
}
