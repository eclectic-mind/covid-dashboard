import AbstractComponent from './abstract-component.js';
import {filterById} from '../utils.js';

export const makeGlobalMarkup = (data, filter) => { 
  let sum = 0;
  let todaySum = 0;
  if (filter === null) {
    sum = data.global.TotalConfirmed;
    todaySum = data.global.NewConfirmed;
  } else {
    const countryData = filterById(data, filter);
    sum = countryData.countries[0].TotalConfirmed;
    todaySum = countryData.countries[0].NewConfirmed;
  }
  return (
    `<div class="global_cases">
      <h4>Global Cases</h4>
      <h2>${sum}</h2>
      <h4>New cases for today</h4>
      <h2>${todaySum}</h2>
    </div>`
  );
};

export default class Global extends AbstractComponent {

  constructor(data, filter) {
    super();
    this._data = data;
    this._filter = filter;
  }

  getTemplate() {
    return makeGlobalMarkup(this._data, this._filter);
  }

}