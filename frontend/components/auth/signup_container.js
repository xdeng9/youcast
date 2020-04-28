import { connect } from 'react-redux';
import Form from './form';
import { signup } from '../../actions/session';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Signup'
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);