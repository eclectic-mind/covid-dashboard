import {render, RenderPosition} from '../utils.js';
import RecoveriesComponent from '../components/recoveries.js';

export default class ReoveriesController {

  constructor(container, data) {
    this._container = container;
    this._data = data;
  }

  render() {
    const recoveries = new RecoveriesComponent(this._data);
    render(this._container, recoveries, RenderPosition.BEFOREEND);
  }

}
