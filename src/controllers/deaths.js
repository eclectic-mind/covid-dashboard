import {render, RenderPosition} from '../utils.js';
import DeathsComponent from '../components/deaths.js';

export default class DeathsController {

  constructor(container, data) {
    this._container = container;
    this._data = data;
  }

  render() {
    const recoveries = new DeathsComponent(this._data);
    render(this._container, recoveries, RenderPosition.BEFOREEND);
  }

}
