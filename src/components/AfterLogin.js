import React from 'react'
import {Link} from "react-router-dom";
import Header1 from './Header1';
import Medium from './medium';
import Example from './slider'
import Footer from './Footer';
import 'react-slideshow-image/dist/styles.css'
const AfterLogin=() =>{
    return (
        <div>
            <Header1/>
            <div >
            <Example/>
            </div>
            <Footer/>
        </div>
            
        
        

        
    );
}
export default AfterLogin;