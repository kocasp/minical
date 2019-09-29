import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  date: '28-09-2019'
}

export const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
