import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Footer from './Footer';


function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginStudent = async (e) => {
        e.preventDefault();

        const res = await fetch('/student-login', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
              },
            body:JSON.stringify({
                username,
                password
            })

        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login Successful");
            navigate("/home")
            
        }

    }

    return(
        <>
        <Header/>
        <div className='log'>
            <div class='row person'>
                <div class='col-sm-6 '>
                    <div class='row'>
                        <div class='col-sm-12'>
                            <h2 className='per'>Student Login</h2>
                        </div>
                    </div>
                </div>
                <div class='col-sm-6 '>
                    <form method='POST'>
                    <div class='row'>
                        <div class='col-sm-12'>
                        <div className="form">
          <div className="form-body">
           <div className="username">
                  <label className="form__label" for="username" >Username </label>
                  <input className="form__input" type='text' id="username" autoComplete='off'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   placeholder="Registration Number" />
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" autoComplete='off'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
              </div>
          </div>
          <div class="footer">
          <input type="submit" class="btn btn-primary btn-large" name='signin' value={"Login"}
              onClick={loginStudent}
              />
          </div>
      </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )

}

export default LoginForm;