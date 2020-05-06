import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { toggleSidebar } from '../../actions/ui';

const mapStateToProps = state => ({
    partial: state.ui.partial
})

const mapDispatchToProps = dispatch => ({
    toggleSidebar: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);