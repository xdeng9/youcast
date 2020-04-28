import React from 'react';
import { Link } from 'react-router-dom';
import { demoUser } from '../../util/session/demo_user';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            validEmail: null 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.action(demoUser).then(() => this.props.history.push('/'))
    }

    handleUpdate(type) {
        return (e) => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    renderError() {
        return (
            <p className="error-message">
                <i className="fas fa-exclamation-circle"></i>  Couldn't find your email
            </p>
        )
    }

    render() {

        // <input
        //     type="password"
        //     placeholder="Password"
        //     value={this.state.password}
        //     onChange={this.handleUpdate('password')}
        // />


        const formContent = (
            <form onSubmit={this.handleSubmit}>
                <div className="form-header">
                    <img src={window.youcastLogo} alt="logo"/>
                    <h3>Sign in</h3>
                    <p>to continue to YouCast</p>
                </div>
                <div className="form-input">
                    <input
                        className="email-input-field"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                    /> 
                    {this.props.errors[0] === 'Invalid email or password' ? this.renderError() : null}
                </div>
                <button className="demo-btn" onClick={this.demoLogin}>Login as a Demo User</button>
                <div className="form-bottom">
                    <Link className="signup-link" to="/signup">Create account</Link>
                    <button className="next-btn" input="submit">Next</button>
                </div>
            </form>
        )
        return (
            <div className="form-wrapper">
                {formContent}
            </div>
        )
    }
}

export default LoginForm;