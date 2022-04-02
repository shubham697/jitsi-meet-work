import { APP } from '../types';

const INITIAL_STATE = {
    user: {
        id: 1,
        displayName: 'Test user 1',
        email: 'user1@test.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
    },
    isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP.LOGGED_IN:
            return { ...state, isLoggedIn: action.payload };
        default:
            return { ...state };
    }
};

