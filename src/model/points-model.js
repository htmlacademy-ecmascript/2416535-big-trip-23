import { getRandomPoint } from '../mock/point-data';
import { getRandomDestination } from '../mock/destination-data';

const MAX_POINTS = 5;

export default class PointsModel {
  points = Array.from({ length: MAX_POINTS }, getRandomPoint);

  getPoints() {
    return this.points;
  }

  getDestination() {
    return Array.from({ length: MAX_POINTS },getRandomDestination);
  }
}
