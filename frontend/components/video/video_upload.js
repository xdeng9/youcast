import React from 'react';

class VideoUpload extends React.Component {

    render() {
        return (
            <div className="upload-form-container">
                <div className="upload-form-box">
                    <p className="video-form-title">Upload video</p>
                    <div className="video-info-wrapper">
                        <div className="thumbnail-video-select">
                            <div className="thumbnail-select">
                                <i className="fas fa-image"></i>
                                <p>Upload thumbnail</p>
                            </div>
                            <div className="video-select">
                                <i className="fas fa-cloud-upload-alt"></i>
                                <p>Upload video</p>
                            </div>
                        </div>
                        <input className="upload-title-field" placeholder="Title"></input>
                        <textarea className="upload-description-field" placeholder="Description"></textarea>
                        <div className="upload-btn-container">
                            <button className="upload-btn">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoUpload;