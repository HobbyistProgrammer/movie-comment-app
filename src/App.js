import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignup from './components/LoginForm/LoginSignup';
import MovieListings from './components/MovieListings/MovieListings';
import RegisterForm from './components/RegisterForm/RegisterForm';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {

  // const navigate = useNavigate();

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginSignup />} />
          <Route path="/movies" element={<MovieListings />} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/movie/:slug" element={<MovieDetails />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;