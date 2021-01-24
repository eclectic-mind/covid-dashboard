import {renameObjKeys} from './utils.js';
import UpdatedController from './controllers/updated.js';
import CountriesController from './controllers/countries.js';
import CovidModel from './models/covid.js';
import drawMap from "./controllers/map";

const API_URL = `https://api.covid19api.com`;
const TOKEN = `5cf9dfd5-3449-485e-b5ae-70a60e997864`;
const main = document.querySelector('#main');

const covidModel = new CovidModel();

const loadData = () => {
  return fetch(`${API_URL}/summary`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Headers': 'X-Access-Token',
      'X-Access-Token': TOKEN
    }
    }).then((response) => {
      return response.text();
    }).then((text) => {
      const api = JSON.parse(text);
      renameObjKeys(api);
      renameObjKeys(api.global);
      api.countries.map((item) => renameObjKeys(item));
      covidModel.setData(api);
      const updated = new UpdatedController(main, covidModel);
      const countries = new CountriesController(main, covidModel);
      updated.render();
      countries.render();
    });
};

drawMap();
loadData();