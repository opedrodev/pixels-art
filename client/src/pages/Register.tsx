import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Link from 'components/UI/Link';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerValidationSchema } from 'validations/registerValidationSchema';

export default function Register() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setCredentials({
      ...credentials,
      [target.name]: target.value,
    });
  }

  async function onRegister() {
    try {
      await registerValidationSchema.validate(credentials);

      // TODO: Register user

      navigate('/');
      toast.success('Register success!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        throw new Error(error.message);
      }
    }
  }

  return (
    <main className='text-gray-700 grid place-content-center justify-items-center h-[100vh]'>
      <h1 className='text-5xl uppercase mb-16'>Pixels Art</h1>

      <div className='flex flex-col gap-8 w-[400px] border border-gray-200 p-8 shadow'>
        <h2 className='text-sm uppercase text-center'>Register</h2>

        <Input
          type='text'
          placeholder='Username'
          name='username'
          onChange={ handleChange }
        />

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

        <Input
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          onChange={ handleChange }
        />

        <Button
          text='Register'
          onClick={ onRegister }
        />
      </div>

      <Link
        to='/'
        className='mt-8'
      >
        Already have an account? Login
      </Link>
    </main>
  );
}
