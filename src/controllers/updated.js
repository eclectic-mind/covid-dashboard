import {render, RenderPosition} from '../utils.js';
import UpdatedComponent from '../components/updated.js';

export default class UpdatedController {

  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._updated = null;
  }

  render() {
    const data = this._model.getData();
    const date = data.Date;
    this._updated = new UpdatedComponent(date);
    render(this._container, this._updated, RenderPosition.BEFOREEND);
  }

}
