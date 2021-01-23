import AbstractComponent from './abstract-component.js';

export const makeUpdatedMarkup = (date) => {
  let month = +date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = date.getFullYear();
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
  return (
    `<div class="updated">
      <p>Last updated at</p>
      <h3>${formattedDate}</h3>
    </div>`
  );
};

export default class Updated extends AbstractComponent {

  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    return makeUpdatedMarkup(this._data);
  }

}