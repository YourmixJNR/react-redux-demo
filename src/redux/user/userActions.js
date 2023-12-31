import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
};

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchUsersSuccess())
            const fetchList = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await fetchList.json();
            const users = response.map(user => user.id);
            dispatch(fetchUsersSuccess(users));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
};

