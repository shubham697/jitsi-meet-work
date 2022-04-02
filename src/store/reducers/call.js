import {APP} from '../types';

const INITIAL_STATE = {
    call_channels : [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP.SET_CALL_CHANNELS : {
            return {
                ...state,
                call_channels : action.payload || []
            };
        }
        default:
            return {...state};
    }
};

