import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class VideoEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            thumbnailFile: null,
            thumbnail: '',
            loading: false,
            error: '',
            creator: ''
        }
        
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleThumbnailUpload = this.handleThumbnailUpload(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
            .then(obj => {
                this.setState({
                    title: obj.video.title,
                    description: obj.video.description,
                    thumbnail: obj.video.thumbnail,
                    creator: obj.video.creator 
                })
            })
    }

    componentDidUpdate() {
        this.checkAuth();
    }

    handleThumbnailUpload(e) {
        if (e.currentTarget === undefined) return;
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                thumbnailFile: file,
                thumbnail: reader.result
            })
        }
        if (file) reader.readAsDataURL(file);
    }

    handleChange(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.match.params.videoId);
        // this.props.history.push('/');
    }

    handleUpdate(e) {
        e.preventDefault();
        const { title, description, thumbnailFile } = this.state;
        if (title === '' || description === '') {
            this.setState({ error: "Required field can't be blank" })
            return;
        } 

        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if (this.state.thumbnailFile) formData.append('video[thumbnail]', this.state.thumbnailFile);
        
        this.setState({ loading: true });
        this.props.updateVideo(formData, this.props.match.params.videoId).then(obj => {
            this.props.history.push(`/watch/${obj.video.id}`)
        },
            () => this.setState({ loading: false }))
    }

    renderVideoError() {
        if (this.state.error !== '')
            return (
                <p className="error-message">
                    <i className="fas fa-exclamation-circle"></i>  {this.state.error}
                </p>
            )
        if (this.props.errors.length !== 0) {
            return (
                <ul>
                    {this.props.error.map((error, idx) => {
                        return (
                            <li key={idx}>
                                <i className="fas fa-exclamation-circle"></i> {error}
                            </li>
                        )
                    })}
                </ul>
            )
        }
        return null;
    }

    renderDeleteButton() {
        return (
            <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
        )
    }

    renderUpdateButton() {
        if (!this.state.loading) {
            return (
                <button className="upload-btn" onClick={this.handleUpdate}>Update</button>
            )
        } else {
            return (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
            )
        }
    }

    checkAuth() {
        if (this.props.currentUser && this.state.creator !== '') {
            if (this.props.currentUser.username !== this.state.creator)
                this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="upload-form-container">
                <div className="upload-form-box">
                    <p className="video-form-title">Edit video</p>
                    <div className="video-info-wrapper">
                        <div className="thumbnail-edit-select">
                            <div className="thumbnail-select">
                                <input
                                    className="thumbnail-select-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={this.handleThumbnailUpload}
                                />
                                <img src={this.state.thumbnail}></img>
                            </div>
                        </div>
                        <input 
                            className="upload-title-field" 
                            placeholder="Title (required)" 
                            value={this.state.title}
                            onChange={this.handleChange('title')} />
                        <textarea 
                            className="upload-description-field" 
                            placeholder="Description (required)" 
                            value={this.state.description}
                            onChange={this.handleChange('description')}></textarea>
                            {this.renderVideoError()}
                        <div className="update-btn-container">
                            {this.renderDeleteButton()}
                            {this.renderUpdateButton()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoEdit);