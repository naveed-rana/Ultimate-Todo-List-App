export const ADD_TODO = 'ADD_TODO';

//Call Reducer

export function addToDo(data) {
    alert('add action func')
    return {
        type: ADD_TODO,
        payload: data
    }
}