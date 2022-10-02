import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLock2Line,RiEyeCloseFill} from 'react-icons/ri';
import { MdRemoveRedEye} from 'react-icons/md'
import {
  Main,
LogoCont,
Logo,
FormCont,
FormHead,
FormBody,
Em,
SvgStyle,
FormInputDiv,
FormInput,
FormPara,
FormButton,
FormParaStatus,
SwitchCont,
SwitchPara,
SwitchButton,
SwitchSpan
} from './SignInElements'
import LogoMain from '../Images/logo.jpg'
import useForm from './useForm';

const SignIn = () => {

  const {handleCreds, HandleSignIn, statusMsg} = useForm();


  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  
  return (
    <>
      <Main>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont onSubmit={HandleSignIn}>
          <FormHead>
           Login To Your Account
          </FormHead>
          <FormBody>
            <FormInputDiv><HiOutlineMail style={SvgStyle}/><FormInput type="text" name='email' placeholder='Email Address' onChange={handleCreds} Required></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput type={showPassword ? "text" : "password"} name='password' placeholder='Password' onChange={handleCreds} Required></FormInput><Em style={SvgStyle}>{showPassword ? <MdRemoveRedEye onClick={()=>setShowPassword(!showPassword)}/> : <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)}/>}</Em></FormInputDiv>
          </FormBody>
          <FormPara>Forgot Password?</FormPara>
          <FormButton type='submit'>
            Sign In
          </FormButton>
          <FormParaStatus>{statusMsg}</FormParaStatus>
        <SwitchCont>
          <SwitchPara>Don't have an account?</SwitchPara>
         </SwitchCont>
        </FormCont>
      </Main>
    </>
  )
}

export default SignIn;