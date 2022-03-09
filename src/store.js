import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { timeslotListReducer } from './reducers/timeslotReduxer.js';

const reducer = combineReducers({
  timeslotList: timeslotListReducer,
});

const initialState = [];
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
