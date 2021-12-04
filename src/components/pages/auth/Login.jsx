import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Form, Col } from 'react-bootstrap';

import PublicTemplate from '../../templates/Public/PublicTemplate';

import { login } from '../../../services/api';

import './Login.css';

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().max(),
});

const Login = ({ loginUser }) => {
  const navigate = useNavigate();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      try {
        const tokenResponse = await login(formData);

        localStorage.setItem('token', tokenResponse.token);

        // Update APP's isUserLogged to TRUE
        loginUser();

        navigate('/books');
      } catch (error) {
        setErrors({
          email: error.response.data.error,
          password: error.response.data.error,
        });
      }
    },
  });

  return (
    <PublicTemplate>
      <Form onSubmit={handleSubmit} className="form">
        <div className="form-fields">
          <Form.Group
            as={Col}
            md="12"
            controlId="login-form"
            className="form-group"
          >
            <Form.Control
              className="form-one-field"
              type="text"
              name="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && errors.email}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            controlId="login-form"
            className="form-group"
          >
            <Form.Control
              className="form-one-field"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.password && !errors.password}
              isInvalid={touched.password && errors.password}
            />
            <Form.Control.Feedback className="feedback">
              Ok!
            </Form.Control.Feedback>
            <Form.Control.Feedback className="feedback" type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="login-button-container">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </Form>
    </PublicTemplate>
  );
};

export default Login;
