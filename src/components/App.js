import React from 'react';
import './App.css';

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Medium from './medium';
import Login from './Login';
import Border from './Border';
import RegistrationForm from './registration';
import RegistrationForm1 from './security_registration';
import Medium_reg from './Medium_reg';
import LoginForm from './student_login';
import LoginForm1 from './security_login';
import AfterLogin from './AfterLogin';
import Dashboard from './Dashboard';

// import Errorpage from './Errorpage'

function App() {
 
  return (
    
    // <div >
    //   <Header />
    //   <Footer />
     
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/login" element={<Medium/>}/>
        <Route path="/medium_reg" element={<Medium_reg/>}/>
        <Route path="/border" element={<Border/>}/>
        <Route path="/student-register" element={<RegistrationForm/>}/>
        <Route path="/student-login" element={<LoginForm/>}/>
        <Route path="/home" element={<AfterLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/security-register' element={<RegistrationForm1/>}/>
        <Route path="/security-login" element={<LoginForm1/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

// export default App;
