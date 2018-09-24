export const UPDATE_TODO = 'UPDATE_TODO';

export function updateToDo(data) {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}