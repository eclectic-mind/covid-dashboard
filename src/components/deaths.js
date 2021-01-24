import AbstractComponent from './abstract-component.js';
import {filterById} from '../utils.js';

export const makeDeathRow = (countryData) => {
  const name = countryData.country;
  const todayDeaths = countryData.newDeaths;
  const totalDeaths = countryData.totalDeaths;
  const id = countryData.countryCode;
  const trName = `c-${id}`;
  return (
    `<tr class="${trName}">
      <td><strong>${name}</strong><br>
      ${totalDeaths} died (${todayDeaths} today)<br>
      </td>
    </tr>`
  );
};

export const makeDeathsTableMarkup = (data, filter) => {
  const dataFiltered = filterById(data, filter);
  const sum = data.global.totalDeaths;
  const today = data.global.newDeaths;
  const countries = dataFiltered.countries;
  const rows = countries.map((item) => makeDeathRow(item)).join('');
  
  return (
    `<div class="deaths">
      <h4>Global deaths:</h4>
      <h5><strong>${sum}</strong> (${today} today)</h5>
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