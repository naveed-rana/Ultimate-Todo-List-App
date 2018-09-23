import { ADD_TODO } from '../actions/AddToDoActions';
import { REMOVE_TODO } from '../actions/DeleteToDoActions';
import { UPDATE_TODO } from '../actions/UpdateToDoActions';

import todosReducer from './TodoReducers';
import fakeTodos from "./fakeTodos";
let state = {
    todoList: fakeTodos,
};
describe("Todo Reducer", () => {

    it("Should add a new todo", () => {
        let todoItem = {
            id: "115",
            title: "Title",
            description: "description",
            done: true,
            createat: "sep"
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
                description: "description",
                done: true,
                createat: "sep"
            }
        });
        expect(result.todoList[2].done).toEqual(true);
    });

});
