export default class Covid {

  constructor(data) {
    this._data = data;
    this._activeFilter = null;
    this._dataChangeHandlers = [];
    this._filterChangeHandlers = [];
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = Array.from(data);
    this._callHandlers(this._dataChangeHandlers);
  }

  static parseData(data) {
    return new Covid(data);
  }

  setFilter(filter) {
    this._activeFilter = filter;
    this._callHandlers(this._filterChangeHandlers);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }

  setDataChangeHandler(handler) {
    this._dataChangeHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

}

