import { addTodoAction, ADD_TODO } from "../../Redux/actions/AddToDoActions";
import { removeTodoAction, REMOVE_TODO } from "../../Redux/actions/DeleteToDoActions";
import { updateTodoAction, UPDATE_TODO } from "../../Redux/actions/UpdateToDoActions";

describe("Todos Actions", () => {

    it("Adds a new TODO", () => {

        const result = addTodoAction({
            id: "123",
            title: "Title",
            desc: "description",
            done: true,
            createAt: "sep"
        });
        expect(result).toEqual({
            type: ADD_TODO,
            payload: {
                id: "123",
                title: "Title",
                desc: "description",
                done: true,
                createAt: "sep"
            }
        });
    });


    it("Deletes TODO", () => {
        const result = removeTodoAction("115");
        expect(result).toEqual({
            type: REMOVE_TODO,
            payload: "115"
        });
    });

    it("Update value of todo", () => {
        const result = updateTodoAction({
            id: "115",
            title: "Title",
            desc: "description",
            done: true,
            createAt: "sep"
        });
        expect(result).toEqual({
            type: UPDATE_TODO,
            payload: {
                id: "115",
                title: "Title",
                desc: "description",
                done: true,
                createAt: "sep"
            }
        });
    });

});
