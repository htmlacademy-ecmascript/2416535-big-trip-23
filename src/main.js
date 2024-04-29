import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import Presenter from './presenter.js';
import {RenderPosition, render} from './render.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const presenter = new Presenter({container:tripEvents});

render(new FilterView(), tripControlsFilters);
render(new SortView(), tripEvents, RenderPosition.AFTERBEGIN);
presenter.init();
