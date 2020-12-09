import {createElement} from '../utils.js';

// абстрактный компонент, от которого будут наследовать базовые методы все остальные компоненты

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  show() {
    if (this._element && this._element.classList.contains('invisible')) {
      this._element.classList.remove('invisible');
    }
  }

  hide() {
    if (this._element && !this._element.classList.contains('invisible')) {
      this.getElement().classList.add('invisible');
    }
  }

  recoveryListeners() {
    throw new Error(`Abstract method not implemented: recoveryListeners`);
  }

  /* этот метод надо будет переделать, он не очень рабочий

  rerender() {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();
    parent.replaceChild(newElement, oldElement);
  }

  */
}
