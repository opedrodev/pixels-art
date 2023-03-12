import { object, ref, string } from 'yup';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const registerValidationSchema = object({
  confirmPassword: string()
    .required('Confirm password is required!')
    .oneOf([ref('password')], 'Passwords must match!'),

  password: string()
    .required('Password is required!')
    .min(6, 'Password must be at least 6 characters!'),

  email: string()
    .required('Email is required!')
    .matches(EMAIL_REGEX, 'Invalid email address!'),

  username: string()
    .required('Username is required!')
    .min(3, 'Username must be at least 3 characters!')
    .max(20, 'Username must be at most 20 characters!')
});
