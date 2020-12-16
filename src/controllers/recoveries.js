import {render, RenderPosition, filterByCountry} from '../utils.js';
import RecoveriesComponent from '../components/recoveries.js';

export default class RecoveriesController {

  constructor(container, data, filter = null) {
    this._container = container;
    this._data = data;
    this._filter = filter;
  }

  render() {
    const dataFiltered = filterByCountry(this._data, this._filter);
    const recoveries = new RecoveriesComponent(dataFiltered);
    render(this._container, recoveries, RenderPosition.BEFOREEND);
  }

}
