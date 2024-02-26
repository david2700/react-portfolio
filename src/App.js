import './App.css';
import 'boxicons/css/boxicons.min.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
