export const ADD_TODO = 'ADD_TODO';

//Call Reducer

export function addToDo(data) {
    return {
        type: ADD_TODO,
        payload: data
    }
}