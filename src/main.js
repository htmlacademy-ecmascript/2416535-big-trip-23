import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import Presenter from './presenter.js';
import {RenderPosition, render} from './render.js';
import PointsModel from './model/points-model.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const presenter = new Presenter({
  container:tripEvents,
  pointsModel,
});

render(new FilterView(), tripControlsFilters);
render(new SortView(), tripEvents, RenderPosition.AFTERBEGIN);

presenter.init();
