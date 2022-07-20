import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link, useNavigate} from 'react-router-dom';
const Header=()=>{
  // let navigate=useNavigate();
  const [user, setUser]=useState('');
  useEffect(()=>{
    var full_name=localStorage.getItem("full_name");
    setUser(full_name);
  },
  [])

  const LogOut= ()=>{
    localStorage.removeItem('email');
    localStorage.clear();
    // navigate('/login');
  }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link active">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/register" class="nav-link">Register</Link>
      </li>
      <li class="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
      </li>
    </ul>
    <span class="navbar-text">
      Welcome:  {user} | <Link to='/login' onClick={LogOut}>LogOut</Link>
    </span>
  </div>
</nav>
    )
}

export default Header;