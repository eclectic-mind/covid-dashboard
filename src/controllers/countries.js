import {render, RenderPosition} from '../utils.js';
import CountriesComponent from '../components/countries.js';

export default class CountriesController {
/*
  constructor(container, dataModel) {
    this._container = container;
    this._dataModel = dataModel;
  }

  */
  constructor(container, data, filter = null) {
    this._container = container;
    this._data = data;
    this._filter = filter;
  }

  render() {
    const countriesData = this._data.countries;
    const countries = new CountriesComponent(countriesData, this._filter);
    render(this._container, countries, RenderPosition.BEFOREEND);
  }

}
