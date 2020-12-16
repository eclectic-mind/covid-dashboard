import AbstractComponent from './abstract-component.js';

export const makeRecRow = (countryData) => {
  const name = countryData.Country;
  const totalRec = countryData.TotalRecovered;
  return (
    `<tr>
      <td><span>${totalRec} recovered</span><br>${name}</td>
    </tr>`
  );
};

export const makeRecoveriesTableMarkup = (data) => {
  const sum = data.Global.TotalRecovered;
  const countries = data.Countries;
  const rows = countries.map((item) => makeRecRow(item));
  
  return (
    `<div class="recoveries">
      <p>Global recoveries</p>
      <h3>${sum}</h3>
      <table class="recov__table">
        ${rows}
      </table>
    </div>`
  );
};

export default class Recoveries extends AbstractComponent {

 constructor(data) {
  super();
  this._data = data;
  }

  getTemplate() {
    return makeRecoveriesTableMarkup(this._data);
  }
}