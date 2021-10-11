import React, {Component} from 'react'
import {connect} from 'react-redux'
import {authUser} from '../../store/actions/adminAppActions'
import './../../../sass/admin.scss'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            remember: false,
            lang: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemember = this.handleRemember.bind(this)
        if (cookies.get('isAuthenticated')){
            this.props.history.push('/admin',{from: this.props.match.path})
        }
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.authUser({
            email: this.state.email,
            password: this.state.password,
            remember: this.state.remember,
            language: this.state.lang
        })

        if (cookies.get('isAuthenticated')){
           this.props.history.push('/admin',{from: this.props.match.path})
        }

    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleRemember(e){
        this.setState({
            remember: !this.state.remember
        });
        // console.log(e)
    }
    render() {
        return <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome back, Charles</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">

                                        <form
                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg"
                                                       type="email"
                                                       name="email"
                                                       placeholder="Enter your email"
                                                       onChange={this.handleChange}
                                                       value={this.state.username}
                                                />

                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg"
                                                       type="password"
                                                       name="password"
                                                       placeholder="Enter your password"
                                                       onChange={this.handleChange}
                                                       value={this.state.password}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <select name="lang" className="form-control" onChange={this.handleChange} value={this.state.lang}>
                                                    <option value={null}>Select language</option>
                                                    <option value="ro">Romanian</option>
                                                    <option value="ru">Russian</option>
                                                    <option value="gb">English</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="form-check">
                                                    <input
                                                        id="remember"
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        name="remember"
                                                        onChange={this.handleRemember}
                                                        value={this.state.remember}
                                                    />
                                                    <span className="form-check-label">Remember</span>
                                                </label>
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    }
}

const mapStateToProps = state => {
    return {
        loading: state.adminApp.loading,
        loggedUser: state.adminApp.loggedUser,
        access_token: state.adminApp.access_token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authUser: data=>dispatch(authUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
