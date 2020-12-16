import AbstractComponent from './abstract-component.js';

export const makeGlobalMarkup = (data) => {
  const sum = data.global.totalConfirmed;
  return (
    `<div class="global_cases">
      <h4>Global Cases</h4>
      <h2>${sum}</h2>
    </div>`
  );
};

export default class Global extends AbstractComponent {
/* 
  constructor(covidModel) {
    super();
    // this._covidModel = covidModel;
    // this._onDataChange = this._onDataChange.bind(this);
    // this.rerender = this.rerender.bind(this);
  }
*/

  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    // return makeGlobalMarkup(this._covidModel.getGlobalData());
    // const sum = this._data.global.totalConfirmed;
    return makeGlobalMarkup(this._data);
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