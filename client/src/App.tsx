import Home from 'pages/Home';
import Login from 'pages/Login';
import NewBoard from 'pages/NewBoard';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import Workspace from 'pages/Workspace';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer autoClose={ 3000 } />

      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/board/new' element={ <NewBoard /> } />
        <Route path='/board/:userId/:boardId' element={ <Workspace /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
