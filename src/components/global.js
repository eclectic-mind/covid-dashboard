import AbstractComponent from './abstract-component.js';

// html-код потом поменяю, когда будет готова вёрстка

/*
export const makeGlobalMarkup = (data) => {
  return (
    `<section class="global-cases">
      <h4>Global Cases</h4>
      <h2>${data}</h2>
    </section>`
  );
};
*/

export const makeGlobalMarkup = () => {
  return (
    `<section class="global-cases">
      <h4>Global Cases</h4>
      <h2>00000</h2>
    </section>`
  );
};

export default class Global extends AbstractComponent {

  constructor(covidModel) {
    super();
    // this._covidModel = covidModel;
    // this._onDataChange = this._onDataChange.bind(this);
    // this.rerender = this.rerender.bind(this);
  }

  getTemplate() {
    // return makeGlobalMarkup(this._covidModel.getGlobalData());
    return makeGlobalMarkup();
  }

  /* 
  rerender() {
    super.rerender();
  }

  _onDataChange() {
    this.rerender();
  }
  */

}