import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session';
import { toggleSidebar } from '../../actions/ui'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    toggleSidebar: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

