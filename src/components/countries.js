import AbstractComponent from './abstract-component.js';

export const makeCountryRow = (countryData, filter) => {
  const name = countryData.country;
  const totalCases = countryData.totalConfirmed;
  const isActive = countryData.country === filter ? `active` : `regular`;
  return (
    `<tr class="${isActive}">
      <td class="quantity">${totalCases}</td>
      <td class="country-name">${name}</td>
    </tr>`
  );
};

export const makeCountriesTableMarkup = (data, filter) => {
  const rows = data.map((item) => makeCountryRow(item, filter));
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

 constructor(data, filter) {
  super();
  this._data = data;
  this._filter = filter;
  }

  getTemplate() {
    // return makeGlobalMarkup(this._covidModel.getGlobalData());
    return makeCountriesTableMarkup(this._data, this._filter);

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