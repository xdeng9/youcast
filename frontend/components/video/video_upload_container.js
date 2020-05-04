import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo } from '../../actions/video';

const mapStateToProps = state => ({
    errors: state.errors.video 
})

const mapsDispatchToProps = dispatch => ({
    createVideo: formData => dispatch(createVideo(formData))
})

export default connect(mapStateToProps, mapsDispatchToProps)(VideoUpload);
