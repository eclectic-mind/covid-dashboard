import AbstractComponent from './abstract-component.js';
import {filterById} from '../utils.js';

export const makeGlobalMarkup = (data, filter) => { 
  let sum = 0;
  let todaySum = 0;
  let region = 'WHOLE WORLD';
  if (filter === null) {
    sum = data.global.totalConfirmed;
    todaySum = data.global.newConfirmed;
  } else {
    const countryData = filterById(data, filter);
    sum = countryData.countries[0].totalConfirmed;
    todaySum = countryData.countries[0].newConfirmed;
    region = countryData.countries[0].country;
  }
  return (
    `<div class="global_cases">
      <h2>${region}</h2>
      <h5><strong>Global cases:</strong> ${sum}</h5>
      <h5><strong>New cases for today:</strong> ${todaySum}</h5>
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