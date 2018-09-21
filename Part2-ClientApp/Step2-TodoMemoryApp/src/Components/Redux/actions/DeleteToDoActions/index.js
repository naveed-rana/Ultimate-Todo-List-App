export const REMOVE_TODO = 'REMOVE_TODO';

//Call Reducer

export function removeToDo(data) {
    alert('del action func')
    return {
        type: REMOVE_TODO,
        payload: data
    }
}