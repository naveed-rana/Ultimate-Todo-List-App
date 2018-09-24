import { ADD_TODO } from '../../Redux/actions/AddToDoActions';
import { REMOVE_TODO } from '../../Redux/actions/DeleteToDoActions';
import { UPDATE_TODO } from '../../Redux/actions/UpdateToDoActions';

import todosReducer from '../../Redux/reducers/TodoReducers';
import fakeTodos from "./fakeTodos";
let state = {
    todoList: fakeTodos,
};
describe("Todo Reducer", () => {

    it("Should add a new todo", () => {
        let todoItem = {
            id: "115",
            title: "Title",
            desc: "description",
            done: true,
            createAt: "sep"
        };

        const result = todosReducer(state, {
            type: ADD_TODO,
            payload: todoItem
        });

        expect(result).toEqual(Object.assign({}, state, { todoList: [...state.todoList, todoItem] }));
    });

    it("Should Remove todo", () => {
        const result = todosReducer(state, {
            type: REMOVE_TODO,
            payload: "116"
        });
        expect(result).toEqual({
            todoList: [fakeTodos[0], fakeTodos[2]]
        });
    });

    it("Should Update the todo", () => {
        const result = todosReducer(state, {
            type: UPDATE_TODO,
            payload: {
                id: "117",
                title: "Title",
                desc: "description",
                done: true,
                createAt: "sep"
            }
        });
        expect(result.todoList[2].done).toEqual(true);
    });

});
