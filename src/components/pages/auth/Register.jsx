import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Form, Col } from 'react-bootstrap';

import PublicTemplate from '../../templates/Public/PublicTemplate';

import { register, login } from '../../../services/api';

import './Register.css';

const registerSchema = yup.object().shape({
  name: yup.string().required().min(3).max(100),
  email: yup.string().required().email(),
  password: yup.string().required().max(150),
});

const Register = () => {
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
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerSchema,
    onSubmit: async (formData) => {
      try {
        await register(formData);

        const tokenResponse = await login({
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem('token', tokenResponse.token);

        navigate('/books');
      } catch (error) {
        setErrors({
          email: error.response.data.error,
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
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.name && !errors.name}
              isInvalid={touched.name && errors.name}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.name}
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

        <button type="submit" className="register-button">
          Register
        </button>
      </Form>
    </PublicTemplate>
  );
};

export default Register;
