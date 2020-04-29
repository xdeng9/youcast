import React from 'react';
import { Link } from 'react-router-dom';
import { demoUser } from '../../util/session/demo_user';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.props.clearErrors();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login(demoUser).then(() => this.props.history.push('/'))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    isValidEmail(email) {
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailFormat.test(email);
    }

    handleUpdate(type) {
        return (e) => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    renderError(errorMessage) {
        return (
            <p className="error-message">
                <i className="fas fa-exclamation-circle"></i>  { errorMessage.join(' *') }
            </p>
        )
    }

    render() {

        const formContent = (
            <form onSubmit={this.handleSubmit}>
                <div className="form-header">
                    <img src={window.youcastLogo} alt="logo" />
                    <h3>Create Your Account</h3>
                    <p>to continue to YouCast</p>
                </div>
                <div className="form-input">
                    <input
                        className="form-input-field"
                        type="text"
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={this.handleUpdate('username')}
                    />
                    <input
                        className="form-input-field email"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                    />
                    <input
                        className="form-input-field password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUpdate('password')}
                    />
                    { this.props.errors.length > 0 ? this.renderError(this.props.errors) : null}
                </div>
                <button className="demo-btn" onClick={this.demoLogin}>Login as a Demo User</button>
                <div className="form-bottom">
                    <Link className="signup-link" to="/login">Sign in instead</Link>
                    <button className="next-btn" input="submit">Next</button>
                </div>
            </form>
        )
        return (
            <div className="form-wrapper-signup">
                {formContent}
            </div>
        )
    }
}

export default SignupForm;
