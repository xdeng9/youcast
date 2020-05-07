import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchIndex extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            search: ''
        }
        this.processQuery = this.processQuery.bind(this);
    }   

    processQuery(e) {
        e.preventDefault();
        if (this.state.search !== '') {
            this.props.history.push(`/search/${this.state.search}`)
        }
    }

    handleUpdate() {
        return (e) => {
            e.preventDefault();
            this.setState({ search: e.target.value })
        }
    }

    render() {
        return (
            <div className="search-bar-container">
                <form className="search-bar" onSubmit={this.processQuery}>
                    <input
                        onChange={this.handleUpdate()}
                        className="search-field"
                        type="text"
                        placeholder="Search"
                        value={this.state.search} />
                    <button className="search-btn" type="submit">
                        <i className="far fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchIndex);