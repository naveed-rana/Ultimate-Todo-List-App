import { ADD_TODO } from '../../actions/AddToDoActions';
import { REMOVE_TODO } from '../../actions/DeleteToDoActions';
import { UPDATE_TODO } from '../../actions/UpdateToDoActions';

const INITIAL_STATE = {
    todoList: [],
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
                let newList = list.filter((item) => item.id != id);
                return ({
                    ...state,
                    todoList: newList
                });
            }

        case UPDATE_TODO:
            {
                var updateState = state.todoList;
                const id = action.payload.id;

                var index = updateState.findIndex((x) => x.id == id);

                if (index > -1) {
                    //////////
                    // "action.payload" object is coming from the update action 
                    //////////
                    updateState[index] = action.payload;

                    return ({
                        ...state,
                        todoList: updateState
                    });
                }
                else {
                    return ({
                        ...state
                    });
                }
            }

        default:
            return state;
    }
}

export default AddReducer;