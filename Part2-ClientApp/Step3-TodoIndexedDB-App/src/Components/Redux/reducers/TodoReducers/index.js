import { ADD_TODO } from '../../actions/AddToDoActions';
import { REMOVE_TODO } from '../../actions/DeleteToDoActions';
import { UPDATE_TODO } from '../../actions/UpdateToDoActions';
import { LOAD_TODO } from '../../actions/LoadToDoActions';

const INITIAL_STATE = {
    todoList: []
};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        //////////
        // update the state by loading data from indexedDB, whenever render App Component
        //////////
        case LOAD_TODO: return { todoList: action.payload };

        case ADD_TODO:
            {
                var list = state.todoList;
                var newList = list.concat([action.payload]);
                return {
                    ...state,
                    todoList: newList
                }
            }

        case REMOVE_TODO:
            {
                var list = state.todoList;

                ////////
                // Take an id in the form of payload
                ////////
                let id = action.payload;
                let newList = list.filter((item) => item.id != id);
                return ({
                    ...state,
                    todoList: newList
                });
            }

        case UPDATE_TODO:
            {
                var updateState = state.todoList;
                let id = action.payload.id;
                let newList = updateState.filter((item) => item.id != id);
                newList.unshift(action.payload);

                return ({
                    ...state,
                    todoList: newList
                });
            }

        default:
            return state;
    }
}

export default AddReducer;