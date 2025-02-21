import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';
import LoginSignup from './pages/LoginSignup';


function App() {

  // const navigate = useNavigate();

  return (
    <div>
      <LoginSignup />
    </div>
  );
}

export default App;
