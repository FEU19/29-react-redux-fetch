import { createAction, createReducer } from '@reduxjs/toolkit';

// actions: is fetching, success, failure
const isFetching = createAction('is fetching');
const actions = { isFetching };


const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}
const initialState = {
    status: STATUS.NORMAL,
    fact: null
}

const reducer = createReducer(initialState, {
    [isFetching]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    })
})


export { actions, reducer, STATUS };
