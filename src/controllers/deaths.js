import {render, RenderPosition, filterByCountry} from '../utils.js';
import DeathsComponent from '../components/deaths.js';

export default class DeathsController {

  constructor(container, data, filter = null) {
    this._container = container;
    this._data = data;
    this._filter = filter;
  }

  render() {
    const dataFiltered = filterByCountry(this._data, this._filter);
    const recoveries = new DeathsComponent(dataFiltered);
    render(this._container, recoveries, RenderPosition.BEFOREEND);
  }

}
