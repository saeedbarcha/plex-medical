import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {
  Main,
  LogoCont,
  LogoMain,
  HeadCont,
  NavItems,
  ProfileHead,
  ProfileName,
  ProfileId,
  ProfilePic,
  ProfileImg,
  ProfileLogout,
  LogStyle
} from './NavbarElements'
import Logo from './Images/logo.jpg';
import {ImExit} from 'react-icons/im'
import Cookies from 'js-cookie';

const Navbar = (props) => {
  const [userRole, setUserRole] = useState()
  const [userName, setUserName] = useState()


  const navigate = useNavigate();

  useEffect(()=>{
    if(!Cookies.get("accessToken")){
        console.log("no Token");
    setTimeout(()=> {
      navigate("/signin")
    })
    }else if(Cookies.get("accessToken")){
      setUserRole(Cookies.get("role"))
      setUserName(Cookies.get("name"))
      console.log(userRole)
    }
  })

  const handleLogout = (e)=>{
    e.preventDefault()
    Cookies.remove("accessToken")
    window.location.reload();
    
  }

  const handleHome = (e)=>{
    e.preventDefault()
    navigate('/')
    window.location.reload();
    
  }

  return (
    <Main>
        <LogoCont  onClick={handleHome}><LogoMain src={Logo} alt="Main-Logo"></LogoMain></LogoCont>
        <HeadCont>{props.module}</HeadCont>
        <NavItems>
          <ProfileHead>
            <ProfileName>{userName}</ProfileName>
            <ProfileId>{userRole}</ProfileId>
          </ProfileHead>
          <ProfilePic>
            <ProfileImg></ProfileImg>
          </ProfilePic>
          <ProfileLogout onClick={handleLogout}>
            <ImExit style={LogStyle}/>
          </ProfileLogout>
        </NavItems>
    </Main>
  )
}

export default Navbar;