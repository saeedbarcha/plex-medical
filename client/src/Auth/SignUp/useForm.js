
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'

const useForm = () => {
    const navigate = useNavigate();
    const [adminCreds, setAdminCreds] = useState({
      adminname : "",
      organization : "",
      email : "",
      password : "",
      cpassword : ""
    })
    const [userCreds, setUserCreds] = useState({
      username : "",
      surname : "",
      organization : "",
      email : "",
      password : "",
      cpassword : "",
      gender : "",
      age : ""
    })
    const [statusMsg, setStatusMsg] = useState("");


    const handleAdminCreds = (e)=>{
      const Name= e.target.name
      const Value = e.target.value
      setAdminCreds({...adminCreds, [Name]:Value})
    }
    const handleUserCreds = (e)=>{
      const Name= e.target.name
      const Value = e.target.value
      setUserCreds({...userCreds, [Name]:Value})
    }

    const HandleAdminSignUp = async(e)=>{
        e.preventDefault();
    
        const {adminname,
          organization,
          email,
          password,
          cpassword} = adminCreds;

        if(!adminname || !organization || !email || !password || !cpassword) {
          setStatusMsg("All fields are required!");
        }else if(!email.endsWith("@gmail.com")){
          setStatusMsg("Email is Invalid!");
        }else if(password !== cpassword){
          setStatusMsg("Password is Not Matching!");
        }
        else { 
        axios.post(`${process.env.REACT_APP_MAIN_URL}/adminsignup`,{
          adminname,
          organization,
          email,
          password,
          cpassword
        })
        .then(data =>{
          const {token} = data.data;

          Cookies.set("accessToken", token);  

          if (data.status === 422) {
            setStatusMsg("Email already exists")     
          }else if(data.status === 201){
            setStatusMsg("Registered Successfully!!")          
            setTimeout(()=>{
              //  navigate("/signin");
            },0)
           
          }
        console.log(data)
        })

      }
    }
    
    const HandleUserSignUp = async(e)=>{
      e.preventDefault();
  
      const {username,
        surname,
        organization,
        email,
        password,
        cpassword,
        gender,
        age} = userCreds;

      if(!username || !surname || !organization || !email || !password || !cpassword || !gender || !age ) {
        setStatusMsg("All fields are required!");
      }else if(!email.endsWith("@gmail.com")){
        setStatusMsg("Email is Invalid!");
      }else if(password !== cpassword){
        setStatusMsg("Password is Not Matching!");
      }
      else { 
      axios.post(`${process.env.REACT_APP_MAIN_URL}/usersignup`,
      {
        username,
        surname,
        organization,
        email,
        password,
        cpassword,
        gender,
        age
      })
      .then(data =>{
        const {token} = data.data;
        Cookies.set("accessToken", token);


        if (data.status === 401) {
          setStatusMsg("Email already exists")          
        }else if(data.status === 201){
          setStatusMsg("Registered Successfully!!")          
          setTimeout(()=>{
            //  navigate("/signin");
          },0)
         
        }
      console.log(data)
      })

    }
  }

    return {handleAdminCreds, handleUserCreds, HandleAdminSignUp, HandleUserSignUp, statusMsg}

}

export default useForm;

