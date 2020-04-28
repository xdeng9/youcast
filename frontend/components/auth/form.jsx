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
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                    <input type="text" value={this.state.email} onChange={this.handleUpdate('email')}/>
                    </label>
                    <label>
                        Password:
                    <input type="password" value={this.state.password} onChange={this.handleUpdate('password')}/>
                    </label>
                    <button>Next</button>
                </form>
            </div>
        )
    }
}

export default Form;