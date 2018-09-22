import db from '../../../config/db';

export const UPDATE_TODO = 'UPDATE_TODO';

// export function updateToDo(data) {
//     // alert("alert from UPDATE action");
//     // console.log('Update actiton data: ', data)
//     return {
//         type: UPDATE_TODO,
//         payload: data
//     }
// }


export function updateToDo(data) {
    // alert('Update Action func', data);
    console.log('Check Dexie id is: ', data.id);
    console.log('Check Dexie data: ', data);

    return (dispatch) => {
        db.table('todos')
            .update(data.id, data)
            .then(() => {
                console.log('after update', data)
                  dispatch({
                    type: UPDATE_TODO,
                    payload: data
                });
            });
    };
}