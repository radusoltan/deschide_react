import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    const isAuthenticated = cookies.get('isAuthenticated')
    console.log('this', isAuthenticated)
    return <Route
        {...restOfProps}
        render={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
}
export default ProtectedRoute
