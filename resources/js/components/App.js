import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"
import store from "../store/store"
import HomePage from './Site'
import AdminMainPage from './Admin'
import Login from './Login'
import ProtectedRoute from "./ProtectedRoute"

class App extends Component {
    render(){
        return <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={Login} />
                    <ProtectedRoute exact path="/admin" component={AdminMainPage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    }
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}
