import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
    partial: state.ui.partial
})

export default connect(mapStateToProps, null)(Sidebar);