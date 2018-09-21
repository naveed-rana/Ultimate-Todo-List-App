import { ADD_TODO } from '../../actions/AddToDoActions';

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

        default:
            return state;
    }
}

export default AddReducer;