import {render, RenderPosition} from '../utils.js';
import UpdatedComponent from '../components/updated.js';

export default class UpdatedController {

  constructor(container, data) {
    this._container = container;
    this._data = data;
  }

  render() {
    // const allData = this._dataModel.getData();
    // const global = allData['Global'];
    // const sum = global['TotalConfirmed'];
    // this._global = new GlobalComponent(sum);
    const date = this._data.date;
    this._updated = new UpdatedComponent(date);
    render(this._container, this._updated, RenderPosition.BEFOREEND);
  }

}
