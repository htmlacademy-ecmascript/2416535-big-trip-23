import FormEditView from './view/form-edit-view.js';
import PointView from './view/point-view';
import ContainerListView from './view/container-list-view.js';
import ContainerListItemView from './view/container-list-item-view.js';
import {render} from './render.js';

export default class Presenter{
  constructor ({container}){
    this.container = container;
  }

  list = new ContainerListView();
  itemList = new ContainerListItemView();
  init(){
    render(this.list, this.container);
    render(new FormEditView(), this.itemList.getElement());
    for(let i = 0; i < 3; i++){
      render(new PointView(), this.itemList.getElement());
      render(this.itemList, this.list.getElement());
      this.itemList = new ContainerListItemView();
    }
  }
}
