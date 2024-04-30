import { createElement } from '../render';

function createContainerListItemTemplate(){
  return `<li class="trip-events__item">
  </li>`;
}

export default class ContainerListItemView{
  getTemplate(){
    return createContainerListItemTemplate();
  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
