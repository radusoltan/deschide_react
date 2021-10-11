import {ADMIN_AUTH_USER, ADMIN_AUTH_USER_FAILURE, ADMIN_AUTH_USER_SUCCESS} from '../types/adminAppTypes'

const initialState = {
    loggedUser: {},
    permissions: [],
    access_token: '',
    loading: false,
    error: {}
}

const adminAppReducer = (state=initialState, action) => {
    switch (action.type){
        case ADMIN_AUTH_USER:
            return {
                ...state,
                loading: true
            }
        case ADMIN_AUTH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedUser: action.user,
                access_token: action.access_token
            }
        case ADMIN_AUTH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: return state
    }
}

export default adminAppReducer
