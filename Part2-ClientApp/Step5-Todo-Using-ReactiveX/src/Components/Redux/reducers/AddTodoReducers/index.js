import {ADDTODO} from '../../actions/AddToDoActions';

const INITIAL_STATE = {
    adsSuccess: '',
    adsErr: ''

};

function AddReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADDTODO:
            {
                return {
                    ...state,
                    adsSuccess: action.response
                }
            }

        default:
            return state;
    }
}

export default AddReducer;