import { ADD_TODO } from '../../actions/AddToDoActions';
import { REMOVE_TODO } from '../../actions/DeleteToDoActions';
import { UPDATE_TODO } from '../../actions/UpdateToDoActions';
import { LOAD_TODO } from '../../actions/LoadToDoActions';

const INITIAL_STATE = {
    todoList: [],
    // copyDta: []
};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

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
                let newList = list.filter((item) => item.id !== id);
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

        case LOAD_TODO:
            {
                let loadData = action.payload;
                return {
                    ...state,
                    todoList: loadData
                }
            }

        default:
            return state;
    }
}

export default AddReducer;