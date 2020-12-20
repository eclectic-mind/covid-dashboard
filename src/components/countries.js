import AbstractComponent from './abstract-component.js';

export const makeCountryRow = (countryData, filter) => {
  const name = countryData.country;
  const totalCases = countryData.totalConfirmed;
  const todayCases = countryData.newConfirmed;
  const id = countryData.countryCode.toLowerCase();
  const trName = `c-${id}`;
  const isActive = countryData.countryCode === filter ? `active` : ``;
  return (
    `<tr class="${trName} ${isActive}">
      <td class="quantity">${totalCases} (${todayCases} today)</td>
      <td class="country-name">${name}</td>
    </tr>`
  );
};

export const makeCountriesTableMarkup = (data, filter) => {
  const countries = data.countries;
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

 constructor(data, filter) {
  super();
  this._data = data;
  this._filter = filter;
  }

  getTemplate() {
    return makeCountriesTableMarkup(this._data, this._filter);
  }

  recoveryListeners(handler) {
    this.setClickHandler(handler);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener('click', handler);
  }

/*
  rerender(newElement) {
    super.rerender(newElement);
  }

  updateCountriesList(data, filter) {
    this._data = data;
    this._filter = filter;
    this.rerender();
  }
 
  _onDataChange() {
    this.rerender();
  }
  */
  
}