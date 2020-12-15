import AbstractComponent from './abstract-component.js';

export const makeUpdatedMarkup = (date) => {
  return (
    `<div class="updated">
      <p>Last Updated at (M/D/YYYY)</p>
      <h4>${date}</h4>
    </div>`
  );
};

export default class Updated extends AbstractComponent {

  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    // return makeGlobalMarkup(this._covidModel.getGlobalData());
    return makeUpdatedMarkup(this._data);
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