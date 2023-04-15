import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header1 from './Header1';
import Footer from './Footer';

const Dashboard = () => {
  
  const navigate = useNavigate();  

  const callDashboardPage = async () => {
    try{
       const res = await fetch('/dashboard',{
        method: "GET",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
       });

        const data = await res.json();
        console.log(data);

        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }

    }catch(err){
       console.log(err);
    //    navigate("/login")
    }
  }


   useEffect(() => {

     callDashboardPage();

   }, []);

  return (
    <div>
        <Header1/>
      Hello World!!
    </div>
  )
}

export default Dashboard
