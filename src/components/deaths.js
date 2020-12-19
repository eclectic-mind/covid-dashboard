import AbstractComponent from './abstract-component.js';
import {filterById} from '../utils.js';

export const makeDeathRow = (countryData) => {
  const name = countryData.Country;
  const todayDeaths = countryData.NewDeaths;
  const totalDeaths = countryData.TotalDeaths;
  const id = countryData.CountryCode;
  const trName = `c-${id}`;
  return (
    `<tr class="${trName}">
      <td>${totalDeaths} died<br>
      (${todayDeaths} today)<br>
      ${name}</td>
    </tr>`
  );
};

export const makeDeathsTableMarkup = (data, filter) => {
  const dataFiltered = filterById(data, filter);
  const sum = data.global.TotalDeaths;
  const countries = dataFiltered.countries;
  const rows = countries.map((item) => makeDeathRow(item));
  
  return (
    `<div class="deaths">
      <p>Global deaths</p>
      <h3>${sum}</h3>
      <table class="deaths__table">
        ${rows}
      </table>
    </div>`
  );
};

export default class Deaths extends AbstractComponent {

 constructor(data, filter) {
  super();
  this._data = data;
    this._filter = filter;

  }

  getTemplate() {
    return makeDeathsTableMarkup(this._data, this._filter);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener('click', handler);
  }

  recoveryListeners() {
    this.setClickHandler();
  }
}