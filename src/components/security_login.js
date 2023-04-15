import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Footer from './Footer';


function LoginForm1() {
    const navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const loginSecurity = async (e) => {
        e.preventDefault();

        const res = await fetch('/security-login', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
              },
            body:JSON.stringify({
                userName,
                Password
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
                            <h2 className='per'>Security Login</h2>
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
                  <label className="form__label" for="userName" >Username </label>
                  <input className="form__input" type='text' id="userName" autoComplete='off'
                   value={userName}
                   onChange={(e) => setUsername(e.target.value)}
                   placeholder="Employee ID" />
              </div>
              <div className="password">
                  <label className="form__label" for="Password">Password </label>
                  <input className="form__input" type="password"  id="Password" autoComplete='off'
                   value={Password}
                   onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
              </div>
          </div>
          <div class="footer">
          <input type="submit" class="btn btn-primary btn-large" name='signin' value={"Login"}
              onClick={loginSecurity}
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

export default LoginForm1;