import AbstractComponent from './abstract-component.js';

export const makeCountryRow = (countryData) => {
  const name = countryData.country;
  const totalCases = countryData.totalConfirmed;
  return (
    `<tr>
      <td class="quantity">${totalCases}</td>
      <td class="country-name">${name}</td>
    </tr>`
  );
};

export const makeCountriesTableMarkup = (data) => {
  const rows = data.map((item) => makeCountryRow(item));
  return (
    `<div class="countries">
      <h4>Cases by Country/Region/Sovereignty</h4>
      <table class="countries__table">
        ${rows}
      </table>
    </div>`
  );
};

export default class Countries extends AbstractComponent {
/*
  constructor(covidModel, country) {
    super();
    this._covidModel = covidModel;
    // this._onDataChange = this._onDataChange.bind(this);
    // this.rerender = this.rerender.bind(this);
    this._country = country;
  }
  */

 constructor(data) {
  super();
  this._data = data;
  }

  getTemplate() {
    // return makeGlobalMarkup(this._covidModel.getGlobalData());
    return makeCountriesTableMarkup(this._data);

  /* 
  rerender() {
    super.rerender();
  }

  _onDataChange() {
    this.rerender();
  }
  */
  }
}