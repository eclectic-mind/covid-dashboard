import {render, RenderPosition} from '../utils.js';
import CountriesComponent from '../components/countries.js';

export default class CountriesController {
/*
  constructor(container, dataModel) {
    this._container = container;
    this._dataModel = dataModel;
  }

  */
  constructor(container, model, filter = null) {
    this._container = container;
    this._model = model;
    this._filter = filter;
    this._countries = null;
  }

  render() {
    const data = this._model.getData();
    this._countries = new CountriesComponent(data, this._filter);
    render(this._container, this._countries, RenderPosition.BEFOREEND);
  }

}
