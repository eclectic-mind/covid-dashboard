import AbstractComponent from './abstract-component.js';

export const makeCountryRow = (countryData, filter) => {
  const name = countryData.Country;
  const totalCases = countryData.TotalConfirmed;
  const isActive = countryData.Country === filter ? `active` : `regular`;
  return (
    `<tr class="${isActive}">
      <td class="quantity">${totalCases}</td>
      <td class="country-name">${name}</td>
    </tr>`
  );
};

export const makeCountriesTableMarkup = (data, filter) => {
  const countries = data.Countries;
  const rows = countries.map((item) => makeCountryRow(item, filter));
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