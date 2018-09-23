import { ADD_TODO } from '../../actions/AddToDoActions';
import { REMOVE_TODO } from '../../actions/DeleteToDoActions';
import { UPDATE_TODO } from '../../actions/UpdateToDoActions';
import { LOAD_TODO } from '../../actions/LoadToDoActions';

const INITIAL_STATE = {
    todoList: []
};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        // update the state by loading data from indexedDB, whenever render App Component
        case LOAD_TODO: return { todoList: action.payload };

        case ADD_TODO:
            {
                var list = state.todoList;
                // console.log('Add Todo Reducer', list);

                var newList = list.concat([action.payload]);
                // console.log('Add Todo Reducer, After Push', newList);

                return {
                    ...state,
                    todoList: newList
                }
            }

        case REMOVE_TODO:
            {
                var list = state.todoList;
                // console.log('Delete Todo Reducer', list);

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
                    // "action.payload" object is coming from the update todo action 
                    //////////

                    updateState[index] = action.payload;
                }
                return ({
                    ...state,
                    todoList: updateState
                });
            }

        // case SEARCH_TODO:
        // {
        //     var prevData = state.todoList;

        //     var text = action.payload;


        //     if(true){
        //         return ({
        //             ...state,
        //             copyData: foundData
        //         });
        //     }else{
        //         return ({
        //             ...state,
        //             copyData: prevData
        //         });
        //     }
        // }

        default:
            return state;
    }
}

export default AddReducer;