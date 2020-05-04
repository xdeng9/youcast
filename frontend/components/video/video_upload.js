import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            thumbnailFile: null,
            videoFile: null,
            loading: false,
            error: ''
        }
        this.handleVideoUpload = this.handleVideoUpload.bind(this);
        this.handleThumbnailUpload = this.handleThumbnailUpload.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpdate(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    handleVideoUpload(e) {
        e.preventDefault();
        this.setState({ videoFile: e.currentTarget.files[0] })
    }

    handleThumbnailUpload(e) {
        e.preventDefault();
        this.setState({ thumbnailFile: e.currentTarget.files[0] })
    }

    handleUpload(e) {
        e.preventDefault();
        const { title, description, thumbnailFile, videoFile } = this.state;
        if (title === '' || description === '') {
            this.setState({ error: "Required field can't be blank" })  
        } else if (videoFile === null) {
            this.setState({ error: "Video must be attached" })
        } else if (thumbnailFile === null) {
            this.setState({ error: "Thumbnail must be attached" })
        } else {
            const formData = new FormData();
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);
            formData.append('video[thumbnail]', this.state.thumbnailFile);
            formData.append('video[video]', this.state.videoFile);

            this.setState({ loading: true });
            this.props.createVideo(formData).then(video => {
                console.log(video, video.id)
                this.props.history.push(`/`) },
                () => this.setState({ loading: false }))
        }

        return;
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
                    { this.props.error.map((error, idx) => {
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

    renderThumbnail() {
        let styleClass = "thumbnail-select";
        let message = "Upload thumbnail";
        if (this.state.thumbnailFile !== null) {
            styleClass = "thumbnail-select green";
            message = this.state.thumbnailFile.name;
        }
        return (
            <div className={styleClass}>
                <input
                    className="thumbnail-select-input"
                    type="file"
                    accept="image/*"
                    onChange={this.handleThumbnailUpload}
                />
                <i className="fas fa-image"></i>
                <p>{message}</p>
            </div>
        )
    }

    renderVideo() {
        let styleClass = "video-select";
        let message = "Upload video";
        if (this.state.videoFile !== null) {
            styleClass = "video-select green";
            message = this.state.videoFile.name;
        }
        return (
            <div className={styleClass} >
                     <input
                         className="video-select-input"
                         type="file"
                         accept="video/*"
                         onChange={this.handleVideoUpload}
                     />
                     <i className="fas fa-cloud-upload-alt"></i>
                    <p>{message}</p>
            </div>
        )
    }

    renderButton() {
        if (!this.state.loading) {
            return (
                <div className="upload-btn-container">
                    <button className="upload-btn" onClick={this.handleUpload}>Upload</button>
                </div>
            )
        } else {
            return (
                <div className="upload-btn-container">
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="upload-form-container">
                <div className="upload-form-box">
                    <p className="video-form-title">Upload video</p>
                    <div className="video-info-wrapper">
                        <div className="thumbnail-video-select">
                            {this.renderThumbnail()}
                            {this.renderVideo()}
                        </div>
                        <input className="upload-title-field" placeholder="Title (required)" onChange={this.handleUpdate('title')}/>
                        <textarea className="upload-description-field" placeholder="Description (required)" onChange={this.handleUpdate('description')}></textarea>
                        {this.renderVideoError()}
                        {this.renderButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoUpload);