import { connect } from 'react-redux';
import Form from './form';
import { login } from '../../actions/session';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);