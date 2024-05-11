import FormEditView from './view/form-edit-view.js';
import PointView from './view/point-view';
import ContainerListView from './view/container-list-view.js';
import ContainerListItemView from './view/container-list-item-view.js';
import {render} from './render.js';

export default class Presenter{
  constructor ({container, pointModel}){
    this.container = container;
    this.pointModel = pointModel;
  }

  list = new ContainerListView();
  listItem = new ContainerListItemView();

  init(){
    this.presenter = [...this.pointModel.getPoints()];
    this.destination = [...this.pointModel.getDestinations()];
    this.offer = this.pointModel.getOffers();

    render(this.list, this.container);
    render(new FormEditView(this.destination, this.offer), this.listItem.getElement());

    for(let i = 0; i < this.presenter.length; i++){
      render(new PointView({point: this.presenter[i], destination: this.destination, offer: this.offer}), this.listItem.getElement());
      render(this.listItem, this.list.getElement());
      this.listItem = new ContainerListItemView();
    }
  }
}
