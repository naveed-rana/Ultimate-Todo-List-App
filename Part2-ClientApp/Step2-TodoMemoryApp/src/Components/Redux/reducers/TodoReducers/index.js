import { ADD_TODO } from '../../actions/AddToDoActions';
import { REMOVE_TODO } from '../../actions/DeleteToDoActions';

const INITIAL_STATE = {
    todoList: [],
};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_TODO:
            {
                var list = state.todoList;
                console.log('Add Todo Reducer', list);

                var newList = list.concat([action.payload]);
                console.log('Add Todo Reducer, After Push', newList);

                return {
                    ...state,
                    todoList: newList
                }
            }

        case REMOVE_TODO:
            {
                var list = state.todoList;
                console.log('Delete Todo Reducer', list);
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

        default:
            return state;
    }
}

export default AddReducer;