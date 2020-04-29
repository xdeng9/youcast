import React from 'react';
import { Link } from 'react-router-dom';
import { demoUser } from '../../util/session/demo_user';
import { verifyEmail } from '../../util/session/session_api_util'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validEmail: false,
            error: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.validEmail)
            this.props.action(this.state).then(() => this.props.history.push('/'), 
            () => this.setState({ error: true }));
        else verifyEmail(this.state.email).then(res => {
            this.setState({ validEmail: res.valid_email, error: res.error, email: res.email || ''})
        })
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
        if (!this.state.validEmail) return (
            <p className="error-message">
                <i className="fas fa-exclamation-circle"></i>  Couldn't find your email
            </p>
        )
        return (
            <p className="error-message">
                <i className="fas fa-exclamation-circle"></i>  Wrong password
            </p>
        )
    }

    getField() {
        if (this.state.validEmail) return (
            <input
                className="login-input-field"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUpdate('password')}
            /> 
        );  
        return (
            <input
                className="login-input-field"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUpdate('email')}
            /> 
        )
    }

    getMessage() {
        if (this.state.validEmail) return (
            <div className="form-message-container">
                <h3>Welcome</h3>
                <p className="email-container">
                    <i className="fas fa-user-circle"></i>
                    <span className="email-display">{this.state.email}</span>
                </p>
            </div>
        );
        return (
            <div className="form-message-container">
                <h3>Sign in</h3>
                <p>to continue to YouCast</p>
            </div>
        )
    }

    render() {
        const formContent = (
            <form onSubmit={this.handleSubmit}>
                <div className="form-header">
                    <img src={window.youcastLogo} alt="logo" />
                    {this.getMessage()}
                </div>
                <div className="form-input">
                    {this.getField()}
                    {this.state.error ? this.renderError() : null}
                </div>
                <div className="demo-btn" onClick={this.demoLogin}>Login as a Demo User</div>
                <div className="form-bottom">
                    <Link className="signup-link" to="/signup">Create account</Link>
                    <button className="next-btn" type="submit">Next</button>
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