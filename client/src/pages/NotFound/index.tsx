import Link from 'components/UI/Link';

export default function NotFound() {
  return (
    <main className='text-gray-700 w-full h-[100vh] grid place-content-center'>
      <h1>404 - Page Not Found</h1>
      <Link
        to='/'
        className='text-center'
      >
        Go to home
      </Link>
    </main>
  );
}
