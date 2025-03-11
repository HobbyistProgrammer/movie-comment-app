import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginSignup from './components/LoginForm/LoginSignup';
import MovieListings from './components/MovieListings/MovieListings';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {

  // const navigate = useNavigate();

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginSignup />} />
          <Route path="/movies" element={<MovieListings />} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;