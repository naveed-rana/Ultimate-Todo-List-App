import { addToDo, ADD_TODO } from "./AddToDoActions";
import { removeToDo, REMOVE_TODO } from "./DeleteToDoActions";
import { updateToDo, UPDATE_TODO } from "./UpdateToDoActions";

describe("Todos Actions", () => {

    it("Adds a new TODO", () => {

        const result = addToDo({
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
        const result = removeToDo("115");
        expect(result).toEqual({
            type: REMOVE_TODO,
            payload: "115"
        });
    });

    it("Update value of todo", () => {
        const result = updateToDo({
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
