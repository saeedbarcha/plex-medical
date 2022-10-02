import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'

const useForm = () => {
    const navigate = useNavigate();

    const [creds, setCreds] = useState({
      email : "",
      password : ""
    })
    const [statusMsg, setStatusMsg] = useState("");


    const handleCreds = (e)=>{
      const Name= e.target.name
      const Value = e.target.value
      setCreds({...creds, [Name]:Value})
    }

    const HandleSignIn = async(e)=>{
        e.preventDefault();
    
        const {email, password} = creds;

        if(!email || !password ) {
          setStatusMsg("All fields are required!");
        }else if (!email.endsWith("@gmail.com")){
          setStatusMsg("Email or Password is Invalid!");
        }
        else { 
          
          axios.post(`${process.env.REACT_APP_MAIN_URL}/login`,{
          email,
          password
        })
        .then(data =>{
          const {token,role,name} = data.data;

          Cookies.set("accessToken", token);
          Cookies.set("role", role);
          Cookies.set("name", name);



        if(data.status === 400 || data.status === 401){
          setStatusMsg("invalid email or password")
        }else if(data.status === 404){
          setStatusMsg("user not found!")
        }else if(data.status === 200 && Cookies.get("accessToken")){
          setStatusMsg("Login Successfully")          
          setTimeout(()=>{
            navigate("/");
          },0)
        }
        console.log(data)
        })

      }
    }

    return {handleCreds, HandleSignIn, statusMsg}

}

export default useForm;