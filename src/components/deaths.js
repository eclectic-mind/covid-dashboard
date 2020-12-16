import AbstractComponent from './abstract-component.js';

export const makeDeathRow = (countryData) => {
  const name = countryData.Country;
  const totalDeaths = countryData.TotalDeaths;
  return (
    `<tr>
      <td><span>${totalDeaths} died</span><br>${name}</td>
    </tr>`
  );
};

export const makeDeathsTableMarkup = (data) => {
  const sum = data.Global.TotalDeaths;
  const countries = data.Countries;
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

 constructor(data) {
  super();
  this._data = data;
  }

  getTemplate() {
    return makeDeathsTableMarkup(this._data);
  }
}