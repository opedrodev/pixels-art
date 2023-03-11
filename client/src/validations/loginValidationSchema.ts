import { object, string } from 'yup';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const loginValidationSchema = object({
  password: string()
    .required('Password is required!')
    .min(6, 'Password must be at least 6 characters!'),

  email: string()
    .required('Email is required!')
    .matches(EMAIL_REGEX, 'Invalid email address!'),
});

export default loginValidationSchema;
