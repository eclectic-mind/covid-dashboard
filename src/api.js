// import Covid from './models/covid.js';
import {RESPONSE_STATUS_MIN, RESPONSE_STATUS_MAX} from './constants.js';
import CovidModel from './models/covid.js';

const checkStatus = (response) => {
  if (response.status >= RESPONSE_STATUS_MIN && response.status < RESPONSE_STATUS_MAX) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Api {

  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getGlobalData() {
    return this._load({url: `summary`})
    .then((response) => response.json())
    .then(CovidModel.parseData);
  }

  _load({url, method = 'get', body = null, headers = new Headers()}) {
    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }

}

