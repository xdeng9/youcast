import React from 'react';
import { Link } from 'react-router-dom'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            validEmail: null 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
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
                    {/* {this.renderError()} */}
                </div>
                <button className="demo-btn">Login as a Demo User</button>
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

export default Form;