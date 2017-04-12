import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class Login extends Component {
  handleFormSubmit = (values) => {
    console.log(values);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label>{label}</label>
      <div>
        <input {...input} className="form-control" type={type} placeholder={label}/>
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Log In</h2>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="email" component={this.renderField} className="form-control" type="text" placeholder="Email"/>
            <Field name="password" component={this.renderField} className="form-control" type="password" placeholder="Password"/>

            <button action="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate,
})(Login);
