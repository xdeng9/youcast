import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session';

const mapStateToProps = state => ({
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);