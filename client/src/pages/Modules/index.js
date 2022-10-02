import React, { useEffect, useState } from 'react'
import {
  Main,
  ModuleCont,
  ModuleToggle,
  ToggleIcon,
  SwitchNav,
  SwitchNav_Active,
  ModuleAnalytics
} from './ModuleElements'
import {BiBody} from 'react-icons/bi'
import SideBar from '../../components/SideBar'
import MainModule from './MainModule'
import PulmunaryModule from './PulmunaryModule';
import CardioModule from './CardioModule'
import bodyIcon from './Images/body-icon.png'
import bodyIcon1 from './Images/body-icon1.png'
import heartIcon from './Images/heart-icon.png'
import heartIcon1 from './Images/heart-icon1.png'
import lungsIcon from './Images/lungs-icon.png'
import lungsIcon1 from './Images/lungs-icon1.png'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const Module = (props) => {

  const [moduleToggler, setModuleToggler] = useState(false)
  const [userId, setUserId] = useState(Cookies.get('role'))

  const navigate = useNavigate()

  // const {role} = userId

  // console.log(role)


  useEffect(()=>{
      if(!Cookies.get("accessToken")){
          console.log("no Token");
          setTimeout(()=> {
              navigate("/signin")
          },[])
          
      }    
  })

  const handleMS = (e) => {
    e.preventDefault()
    props.setMainState(true)
    props.setPulmunaryState(false)
    props.setCardioState(false)
    props.setCardioStatea(false)
    props.setModule("Main Module")
  }

  const handlePS = (e) => {
    e.preventDefault()
    props.setMainState(false)
    props.setPulmunaryState(true)
    props.setCardioState(false)
    props.setCardioStatea(false)
    props.setModule("Pulmonary Module")
  }

  useEffect(()=>{
    if(props.CardioStatea == true){
      props.setModule("Cardio Trend Analysis")
    }

  })

  const handleCS = (e) => {
    e.preventDefault()
    props.setMainState(false)
    props.setPulmunaryState(false)
    props.setCardioState(true)
    props.setCardioStatea(false)
    props.setModule("Cardio Module")
    
  }
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
      props.setModule("Cardio Analysis")
      props.setCardioStatea(true)
  }
  const handleCSaOff = (e) =>{
    e.preventDefault()
    props.setModule("Cardio Module")
    props.setCardioStatea(false)
  }

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
      <ModuleCont>
        <ModuleToggle>
          {props.MainState ? 
            <SwitchNav onClick={handleMS}><ToggleIcon src={props.MainState ? bodyIcon1 : bodyIcon}>
              </ToggleIcon>
            </SwitchNav> 
            : 
            <SwitchNav_Active onClick={handleMS}><ToggleIcon src={props.MainState ? bodyIcon1 : bodyIcon}>
              </ToggleIcon>
            </SwitchNav_Active>
          }
          {props.PulmunaryState ? 
            <SwitchNav onClick={handlePS}><ToggleIcon src={props.PulmunaryState ? lungsIcon1 : lungsIcon}></ToggleIcon></SwitchNav> 
            : 
            <SwitchNav_Active onClick={handlePS}><ToggleIcon src={props.PulmunaryState ? lungsIcon1 : lungsIcon}>
              </ToggleIcon>
            </SwitchNav_Active>
          }
          {props.CardioState ? 
            <SwitchNav onClick={handleCS}><ToggleIcon src={props.CardioState ? heartIcon1 : heartIcon}></ToggleIcon></SwitchNav> 
            : 
            <SwitchNav_Active onClick={handleCS}><ToggleIcon src={props.CardioState ? heartIcon1 : heartIcon}>
              </ToggleIcon>
            </SwitchNav_Active>
          }

        </ModuleToggle>
        <ModuleAnalytics>
      {props.MainState && 
      <MainModule/>
      }
      {props.PulmunaryState && 
      <PulmunaryModule/>
      }
      {props.CardioState && 
      <CardioModule props={handleCSa} State={props.CardioStatea} handleAna={handleCSa} handleCSaOff={handleCSaOff}/>
      
      }

        </ModuleAnalytics>
      </ModuleCont>
    </Main>
    </>
  )
}

export default Module;