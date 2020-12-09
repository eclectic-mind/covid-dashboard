// main.js - наш главный скрипт, который управляет всем приложением и собирает кусочки в единое целое

// импортируем все нужные модели и контроллеры

import GlobalController from './controllers/global.js';
import CovidModel from './models/covid.js';
import Api from './api.js';

const END_POINT = `https://api.covid19api.com`;

// находим наш #main - отправную точку приложения, что-то типа #root в Реакте

const main = document.querySelector('#main');

// получаем данные и запускаем их в модель

// const api = new Api(END_POINT);
// const covidModel = new CovidModel();
// covidModel.setData(api);

// моковые данные для тренировки - потом заменим их на реальные данные с сервера

const mock = 
{
  "Global": {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  },
  "Countries": [
    {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Zimbabwe",
      "CountryCode": "ZW",
      "Slug": "zimbabwe",
      "NewConfirmed": 0,
      "TotalConfirmed": 9,
      "NewDeaths": 0,
      "TotalDeaths": 1,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    }
  ],
"Date": "2020-04-05T06:37:00Z"
};

const covidModel = new CovidModel();
covidModel.setData(mock);

// создаем компонент
const global = new GlobalController(main, covidModel);

// отрисовываем компонент на странице
global.render();

/* 

api.getGlobalData()
  .then((data) => {
    covidModel.setData(data);
})
  .finally(() => {
    const global = new GlobalController(main, covidModel);
    global.render();
  });

*/
