import './App.css';
import HomePage from './page/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './page/register';
import Login from './page/login';
import Profile from './page/profile';
import Navbar from './component/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
