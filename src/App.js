import { createContext, useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export  const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <h1>name: {loggedInUser.name}</h1>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />} /> 
 
          <Route path="/login" element={<Login />} />
            
          <Route path="/book/:bed_type" element={<PrivateRoute> <Book /> </PrivateRoute>} />
            
          <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
