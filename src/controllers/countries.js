import {render, RenderPosition} from '../utils.js';
import CountriesComponent from '../components/countries.js';

export default class CountriesController {
/*
  constructor(container, dataModel) {
    this._container = container;
    this._dataModel = dataModel;
  }

  */
  constructor(container, data) {
    this._container = container;
    this._data = data;
  }

  render() {
    const countriesData = this._data.countries;
    const countries = new CountriesComponent(countriesData);
    render(this._container, countries, RenderPosition.BEFOREEND);
  }

}
