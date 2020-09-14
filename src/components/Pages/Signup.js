import React, { Component } from 'react';
import Inputs from '../Common/input'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import * as AuthActions from '../../store/action/authAction'
const fields =

    [

        { name1: 'firstname', elementName: 'input', type: 'text', placeholder: 'First Name' },
        { name1: 'lastname', elementName: 'input', type: 'text', placeholder: 'Last Name' },
        { name1: 'email', elementName: 'input', type: 'text', placeholder: 'Email' },
        { name1: 'password', elementName: 'input', type: 'password', placeholder: 'Passwordl' },
        // { name1: 'profile_image', elementName: 'file', type: 'file' },
        { name1: 'role', elementName: 'input', type: 'text', placeholder: 'enter role' },
        { name1: 'phone', elementName: 'input', type: 'text', placeholder: 'phone number' },
        { name1: 'address', elementName: 'input', type: 'text', placeholder: 'address' },
        { name1: 'city', elementName: 'input', type: 'text', placeholder: 'city' },
        { name1: 'state', elementName: 'input', type: 'text', placeholder: 'state' },
        { name1: 'country', elementName: 'input', type: 'text', placeholder: 'country' },

        
        { name1: 'zip', elementName: 'input', type: 'text', placeholder: 'zip code ' }

    ]



class Signup extends Component {
    render() {
        return (
            <div className="login-page" >
                <div className="container">
                    <div className="login-form">
                        <h2>SIGN UP</h2>
                        <div className="row">
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.props.signup(this.props.values);
                        }}>
                                {fields.map((f, i) => {

                                    return (
                                        <div className="col-md-12"
                                        >
                                            <Inputs
                                                {...f}
                                                val={this.props.values[f.name1]}
                                                name={f.name1}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[f.name1]}
                                                errors={this.props.errors[f.name1]}
                                                key={i}
                                            />
                                        </div>

                                    )
                                })}

                                <button className="btn btn-primary" type="submit"> Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log('auth state', state)
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    console.log('auth dispatch', dispatch)

    return {
        signup: (value) => {
            dispatch(AuthActions.signup(value));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(withFormik({
        mapPropsToValues: () => ({
            email: '',
            password: ''
        }),
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Email is Invalid').required('You need to login with email address'),
            password: Yup.string().required('Password is required')
        }),
        handleSubmit: (values, { setSubmitting }, login) => {
            console.log('login attempt', setSubmitting, 'value', values)
            // login(values.email, values.password)
        }
    })(Signup ));