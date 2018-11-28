import { combineReducers } from 'redux';

import places from './Places/reducer';

const rootReducer = combineReducers({
  places
})

export default rootReducer;