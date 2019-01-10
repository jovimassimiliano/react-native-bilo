import { createStore } from 'redux';

import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

