import { createElement } from '../render';

function createContainerListTemplate(){
  return `<ul class="trip-events__list">
  </ul>`;
}

export default class ContainerListView{
  getTemplate(){
    return createContainerListTemplate();
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
