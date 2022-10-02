import React, { useState } from 'react'
import {
    Main,
    FormCont,
    FormHead,
    FormBody,
    Em,
    SvgStyle,
    FormInputDiv,
    FormInput,
    FormSelect,
    FormOption,
    FormButton,
    ToggleSwitchCont,
    ToggleButton
} from './AdminElements'
import { Link } from 'react-router-dom';
import {RiUser3Line} from 'react-icons/ri'
import {BsBuilding} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLock2Line,RiEyeCloseFill} from 'react-icons/ri'
import {MdOutlinePeople, MdRemoveRedEye} from 'react-icons/md'
import useForm from '../../../Auth/SignUp/useForm';

const Admin = () => {

  
  const {handleAdminCreds, handleUserCreds, HandleAdminSignUp, HandleUserSignUp, statusMsg} = useForm();
    console.log("kkkkkkkkkkkkkkkkkkkkkk")
    console.log(statusMsg)
    console.log("kkkkkkkkkkkkkkkkkkkkkk")
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const [Switch, setSwitch] = useState(true);


  return (
    <>
    <Main>
      <FormCont>
        <FormHead>
          Register A New Patient
        </FormHead>
        <FormBody>
          <FormInputDiv><RiUser3Line style={SvgStyle}/><FormInput id='user' type="text" placeholder='Username' name='username' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
          <FormInputDiv><RiUser3Line style={SvgStyle}/><FormInput id='user' type="text" placeholder='Surname' name='surname' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
          <FormInputDiv><BsBuilding style={SvgStyle}/><FormInput id='user' type="text" placeholder='Organization' name='organization' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
          <FormInputDiv><HiOutlineMail style={SvgStyle}/><FormInput id='user' type="email" placeholder='Email Address' name='email' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
          <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput id='user' type={showPassword ? "text" : "password"} placeholder='Password' name='password' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}>{showPassword ? <MdRemoveRedEye onClick={()=>setShowPassword(!showPassword)}/> : <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)}/>}</Em></FormInputDiv>
          <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput id='user' type={showCPassword ? "text" : "password"}  placeholder='Confirm Password' name='cpassword' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}>{showCPassword ? <MdRemoveRedEye onClick={()=>setShowCPassword(!showCPassword)}/> : <RiEyeCloseFill onClick={()=>setShowCPassword(!showCPassword)}/>}</Em></FormInputDiv>
          <FormInputDiv><MdOutlinePeople style={SvgStyle}/><FormSelect name='gender' onChange={handleUserCreds}>
            <FormOption value='male'>Male</FormOption>
            <FormOption value='female'>Female</FormOption>
            <FormOption value='other'>Other</FormOption>
          </FormSelect><Em style={SvgStyle}></Em></FormInputDiv>
          <FormInputDiv><HiOutlineMail style={SvgStyle}/><FormInput id='user' type="number" placeholder='age' name='age' onChange={handleUserCreds}></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
        </FormBody>
        <h5 style={{
          color:"white",
          textAlign:"center"
        }}>{statusMsg}</h5>
          <FormButton onClick={HandleUserSignUp}>
            Add Patient
          </FormButton>
      </FormCont>
    </Main>
    <ToggleSwitchCont>
        <ToggleButton onClick={()=>setSwitch(false)}>Add Patient</ToggleButton>
        
    </ToggleSwitchCont>
    </>
  )
}

export default Admin