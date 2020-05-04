import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo } from '../../actions/video';


const mapsDispatchToprops = dispatch => ({
    createVideo: formData => dispatch(createVideo(formData))
})

export default connect(null, mapsDispatchToprops)(VideoUpload);
