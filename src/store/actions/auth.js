import { APP } from '../types';
 
export const setAsLoggedIn = () => async dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            await dispatch({
                type: APP.LOGGED_IN,
                payload: true,
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};