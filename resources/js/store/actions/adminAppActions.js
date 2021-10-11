import Auth from "../../api/Auth"
import {ADMIN_AUTH_USER, ADMIN_AUTH_USER_FAILURE, ADMIN_AUTH_USER_SUCCESS} from '../types/adminAppTypes'

const authUser = data => dispatch => {
    dispatch({
        type: ADMIN_AUTH_USER
    })

    Auth.login(data)
        .then(r=> {
            dispatch({
                type: ADMIN_AUTH_USER_SUCCESS,
                user: r.data.user,
                access_token: r.data.access_token
            })
            cookies.set('isAuthenticated',true)

        })
        .catch(e=> {
            dispatch({
                type: ADMIN_AUTH_USER_FAILURE,
                error: e
            })
            return false
        })
}

export {
    authUser
}
