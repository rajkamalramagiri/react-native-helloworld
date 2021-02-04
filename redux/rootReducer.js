import {combineReducers} from 'redux';

import {countReducer} from './countReducer';
import {cakeReducer} from './cakeReducer';

const rootReducer = combineReducers({
  count: countReducer,
  cake: cakeReducer,
});
export default rootReducer;
