import AbstractComponent from './abstract-component.js';

export const makeGlobalMarkup = (data) => {
  const sum = data.global.TotalConfirmed;
  return (
    `<div class="global_cases">
      <h4>Global Cases</h4>
      <h2>${sum}</h2>
    </div>`
  );
};

export default class Global extends AbstractComponent {

  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    return makeGlobalMarkup(this._data);
  }

}