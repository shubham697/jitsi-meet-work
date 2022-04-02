import { APP } from '../types';

export const setAllCallChannels = (payload) => {
    return { type: APP.SET_CALL_CHANNELS, payload: payload }
}
