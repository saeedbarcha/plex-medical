import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Admin from './Admin'
import {
  Main,
  DashboardCont,
  AddUserCont
} from './DashboardsElements'
import SuperAdmin from './SuperAdmin'

const DashBoard = (props) => {

  const [userRole, setUserRole] = useState()

  const navigate = useNavigate();

  useEffect(()=>{
    if(!Cookies.get("accessToken")){
        console.log("no Token");
    setTimeout(()=> {
      navigate("/signin")
    })
    }else if(Cookies.get("accessToken")){
      setUserRole(Cookies.get("role"))
      console.log(userRole)
    }
  })

  const handleRS = (e) => {
    e.preventDefault()
    props.setModule("Reports")
    navigate('/reports')
    
  }
  const handleRSaOff = (e) =>{
    e.preventDefault()
    props.setModule("Main Module")
    navigate('/')
  }


  const handleCSa = (e) =>{
    e.preventDefault()
      props.setModule("Cardio Trend Analysis")
      props.setCardioStatea(true)
  }
  const handleCSaOff = (e) =>{
    e.preventDefault()
    props.setModule("Cardio Module")
    props.setCardioStatea(false)
  }

  props.setModule("Dashboard")
  return (
    <>
    <SideBar
      module={props.module} 
      CardioStatea={props.CardioStatea} 
      handleAna={handleCSa} 
      handleCSaOff={handleCSaOff} 
      handleRS={handleRS} 
      handleRSaOff={handleRSaOff}
      />
      <Main>
        <DashboardCont>
          <AddUserCont>
            {userRole=="Admin" ?
            <Admin/>
            :
            <SuperAdmin/>
            }
          </AddUserCont>
        </DashboardCont>
      </Main>
    </>
  )
}

export default DashBoard