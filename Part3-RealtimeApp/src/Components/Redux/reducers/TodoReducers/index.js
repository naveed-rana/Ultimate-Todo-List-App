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
                let newList = list.filter((item) => item.id !== id);
                return ({
                    ...state,
                    todoList: newList
                });
            }

        case UPDATE_TODO:
            {
                var updateState = state.todoList;
                // let id = action.payload.id;
                // console.log('================id====================');
                // console.log(id);
                // console.log('====================================');
                // var index = updateState.findIndex((x) => x.id === id);
                // debugger;
                // if (index > -1) {
                //     debugger;
                //     // "action.payload" object is coming from the update action 
                //     updateState[index] = action.payload;
                //     debugger;
                // }

                
            
                updateState.map((todo,index)=>{
                 if(todo.id === action.payload.id){
                    updateState[index]  = action.payload;
                    debugger;
                 }
                });

                return ({
                    ...state,
                    todoList: updateState
                });
               
            }

        case LOAD_TODO:
            {
                // console.log('fetch data from dexie is : ', action.data)
                let loadData = action.payload;
                return {
                    ...state,
                    todoList: loadData
                }
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