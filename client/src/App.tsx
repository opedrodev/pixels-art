import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer autoClose={ 3000 } />

      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
