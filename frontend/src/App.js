import './App.css';
import HomePage from './page/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './page/register';
import Login from './page/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
