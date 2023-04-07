import { login } from 'api/users';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Link from 'components/UI/Link';
import errorHandler from 'helpers/errorHandler';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginValidationSchema from 'validations/loginValidationSchema';

export default function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setCredentials({
      ...credentials,
      [target.name]: target.value,
    });
  }

  async function onLogin() {
    try {
      await loginValidationSchema.validate(credentials);
      await login(credentials);

      navigate('/home');
      toast.success('Login successful!');
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <main className='text-gray-700 grid place-content-center justify-items-center h-[100vh]'>
      <h1 className='text-5xl uppercase mb-16'>Pixels Art</h1>

      <div className='flex flex-col gap-8 w-[400px] border border-gray-200 p-8 shadow'>
        <h2 className='text-sm uppercase text-center'>Login</h2>

        <Input
          type='email'
          placeholder='Email'
          name='email'
          onChange={ handleChange }
        />

        <Input
          type='password'
          placeholder='Password'
          name='password'
          onChange={ handleChange }
        />

        <div className='flex justify-between items-center'>
          <label
            htmlFor='remember'
            className='flex gap-2 cursor-pointer leading-none select-none'
          >
            <input
              type='checkbox'
              name='remember'
              id='remember'
              checked={ credentials.rememberMe }
              onChange={ () => setCredentials({...credentials, rememberMe: !credentials.rememberMe }) }
            />
            Remember me
          </label>

          <Link to='/forgot-password'>Forgot password?</Link>
        </div>

        <Button
          text='Login'
          onClick={ onLogin }
        />
      </div>

      <Link
        to='/register'
        className='mt-8'
      >
        Don&apos;t have an account? Register
      </Link>
    </main>
  );
}
