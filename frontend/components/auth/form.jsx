import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
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

    render() {
        const formContent = (
            <form onSubmit={this.handleSubmit}>
                <div className="form-header">
                    <img src={window.youcastLogo} alt="logo"/>
                    <h3>Sign in</h3>
                    <p>to continue to YouCast</p>
                </div>
                <div className="form-input">
                    <label>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleUpdate('email')}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleUpdate('password')}
                        />
                    </label>
                </div>
                
                <div className="form-button">
                    <button >Create account</button>
                    <button input="submit">Next</button>
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