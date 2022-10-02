import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import Navbar from '../components/Navbar'
import CardioAnalysis from '../pages/Analyse/CardioAnalysis'
import HRVAnalysis from '../pages/Analyse/HRVAnalysis'
import DashBoard from '../pages/Dashboards'
import Module from '../pages/Modules'
import Reports from '../pages/Reports'

const Routing = () => {
  const [module, setModule] = useState("Main Module")
  const [MainState, setMainState] = useState(true)
  const [PulmunaryState, setPulmunaryState] = useState(false)
  const [CardioState, setCardioState] = useState(false)
  const [CardioStatea, setCardioStatea] = useState(false)


  
  return (
    <>

      <BrowserRouter>
      <Navbar  module={module} setModule={setModule}/>
          <Routes>
              <Route path="/signin" element={<SignIn/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/" element={
                <Module module={module} setModule={setModule}
                MainState={MainState}  setMainState={setMainState}
                PulmunaryState={PulmunaryState} setPulmunaryState={setPulmunaryState}
                CardioState={CardioState} setCardioState={setCardioState}
                CardioStatea={CardioStatea} setCardioStatea={setCardioStatea}
                />
              }>
              </Route>
              <Route path="/reports" element={
                <Reports module={module} setModule={setModule}
                MainState={MainState}  setMainState={setMainState}
                PulmunaryState={PulmunaryState} setPulmunaryState={setPulmunaryState}
                CardioState={CardioState} setCardioState={setCardioState}
                CardioStatea={CardioStatea} setCardioStatea={setCardioStatea}
                />
              }>
              </Route>
              <Route path="/dashboard" element={
              <DashBoard module={module} setModule={setModule}
              MainState={MainState}  setMainState={setMainState}
              PulmunaryState={PulmunaryState} setPulmunaryState={setPulmunaryState}
              CardioState={CardioState} setCardioState={setCardioState}
              CardioStatea={CardioStatea} setCardioStatea={setCardioStatea}
              />
              }>

              </Route>
              <Route path="/cardioanalyse" element={
              <CardioAnalysis module={module} setModule={setModule}
              MainState={MainState}  setMainState={setMainState}
              PulmunaryState={PulmunaryState} setPulmunaryState={setPulmunaryState}
              CardioState={CardioState} setCardioState={setCardioState}
              CardioStatea={CardioStatea} setCardioStatea={setCardioStatea}
              />
              }>

              </Route>
              <Route path="/hrvanalyse" element={
              <HRVAnalysis module={module} setModule={setModule}
              MainState={MainState}  setMainState={setMainState}
              PulmunaryState={PulmunaryState} setPulmunaryState={setPulmunaryState}
              CardioState={CardioState} setCardioState={setCardioState}
              CardioStatea={CardioStatea} setCardioStatea={setCardioStatea}
              />
              }>

              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing