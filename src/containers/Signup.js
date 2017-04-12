import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Pleaes enter an email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
  }

  return errors;
}

class Signup extends Component {
  handleFormSubmit = (values) => {
    console.log(values);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className="form-group">
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="email" component={this.renderField} type="text" label="Email"/>
            <Field name="password" component={this.renderField} type="password" label="Password"/>
            <Field name="passwordConfirmation" component={this.renderField} type="password" label="passwordConfirmation"/>
            <button action="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup',
  validate
})(Signup);
