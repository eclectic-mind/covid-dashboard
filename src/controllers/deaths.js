import {render, RenderPosition, filterByCountry} from '../utils.js';
import DeathsComponent from '../components/deaths.js';

export default class DeathsController {

  constructor(container, model, filter = null) {
    this._container = container;
    this._model = model;
    this._filter = filter;
    this._deaths = null;
  }

  render() {
    const data = this._model.getData();
    const dataFiltered = filterByCountry(data, this._filter);
    this._deaths = new DeathsComponent(dataFiltered);
    render(this._container, this._deaths, RenderPosition.BEFOREEND);
  }

}
