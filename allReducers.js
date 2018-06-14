import { combineReducers } from 'redux';
import navReducer from './navReducer';
import changeTextReducer from './reducers/changeTextReducer';

const allReducers = combineReducers({
	nav:navReducer,
	ct:changeTextReducer,
});

export default allReducers;