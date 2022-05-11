import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Login.css'
import Json from './Components/Json';
import img1 from './img1.png';
// import background from './background.jpg';


class App extends Component {
  render() {
    return (
       <Router>
           <div className="App"  style={{ backgroundImage: `url(${img1})` }}  >              
                <Link to="/">Home &nbsp;&nbsp;</Link>
                <span></span>
                <Link to="/about">About Us &nbsp;&nbsp;</Link>
                <span></span>
                <Link to="/contact">Contact Us&nbsp;&nbsp;</Link>
                <span></span>
                <Link to="/Login">Login&nbsp;&nbsp;</Link>
                <span></span>
                <Link to="/Register">Register&nbsp;&nbsp;</Link>
                <span></span>
                <Link to="/Json">Json&nbsp;&nbsp;</Link>
                <span></span>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/About' element={< About />}></Route>
                 <Route exact path='/Contact' element={< Contact />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>
                 <Route exact path='/Register' element={< Register />}></Route>
                 <Route exact path='/Json' element={< Json />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;
// import React from 'react'
// import './App.css'
// import Greet from './Components/Greet'
// import Welcome from './Components/Welcome';
// import User from './Components/User';

//   function App() {
//   return ( 
//     <div className="App"> 
//     <Greet name="Arun"/><br></br>
//     <Greet name="Varun"/><br></br>
//     <br></br><br></br>
//     <Welcome></Welcome>
//     <User></User>
//     </div>
//   );
// }
// export default App;

