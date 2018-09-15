import { combineReducers } from 'redux';
import AddTodoReducers from './AddTodoReducers';

const rootReducer = combineReducers({
        AddTodo:AddTodoReducers,
});

export default rootReducer;
