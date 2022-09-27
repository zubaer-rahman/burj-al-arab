import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />} /> 
 
          <Route path="/login" element={<Login />} />
            
          <Route path="/book/:bed_type" element={<Book />} />
            
          <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
