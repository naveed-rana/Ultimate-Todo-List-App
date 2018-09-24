export const REMOVE_TODO = 'REMOVE_TODO';

//Call Reducer

export function removeToDo(data) {
    return {
        type: REMOVE_TODO,
        payload: data
    }
}