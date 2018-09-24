import { combineReducers } from 'redux';
import TodoReducers from './TodoReducers';

const rootReducer = combineReducers({
        TodoApp:TodoReducers,
});

export default rootReducer;
