import {render, RenderPosition, filterByCountry} from '../utils.js';
import RecoveriesComponent from '../components/recoveries.js';

export default class RecoveriesController {

  constructor(container, model, filter = null) {
    this._container = container;
    this._model = model;
    this._filter = filter;
    this._recoveries = null;
  }

  render() {
    const data = this._model.getData();
    const dataFiltered = filterByCountry(data, this._filter);
    this._recoveries = new RecoveriesComponent(dataFiltered);
    render(this._container, this._recoveries, RenderPosition.BEFOREEND);
  }

}
