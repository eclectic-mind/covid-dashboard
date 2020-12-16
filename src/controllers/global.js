import {render, RenderPosition} from '../utils.js';
import GlobalComponent from '../components/global.js';

export default class GlobalController {

  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._global = null;
  }

  render() {
    const data = this._model.getData();
    console.log(data);
    this._global = new GlobalComponent(data);
    render(this._container, this._global, RenderPosition.BEFOREEND);
  }

}
