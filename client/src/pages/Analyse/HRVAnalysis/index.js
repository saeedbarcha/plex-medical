import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../../components/SideBar'
import {
  Main,
  CAnalyseCont,
  NavigationCont,
  EditCont,
  EditorButton,
  PreviousCont,
  LinksCont,
  GraphicalCont,
  GraphsSection,
  ChartSection,
  Yaxis,
  YHeads,
  ChartCont,
  ChartCont1,
  AbnormalitiesCont,
  HRVGraphCont,
  ChartContL,
  HRVReportCont,
  VitalMonitor,
  MonitorHead,
  MonitorExt,
  HRVReportLeft,
  HRVGeneral,
  HRVHead,
  DetailBody,
  Head,
  Value,
  HRVDomain,
  HRVReportRight,
  HRVTableReport,
  DetailBody1,
  DetailBodyD
} from './HRVAnalysisElements'
import {AiOutlineSelect} from 'react-icons/ai'
import {CgArrowsExpandRight} from 'react-icons/cg'
import {BiErrorAlt} from 'react-icons/bi'
import {BsFillArrowRightCircleFill,BsPen} from 'react-icons/bs'
import {TbZoomInArea,TbArrowBackUp} from 'react-icons/tb'
import Grid2 from '../../../components/Charts/Images/Grid2.png'
import RRChart from '../../../components/Charts/ScatterChart/RR'
import IntervalNumber from '../../../components/Charts/BarChart/IntervalNumber'
import HRVRr from '../../../components/Charts/BarChart/HRVRR'
import ECGChart from '../../../components/Charts/LineChart/Ecg'
import Cookies from 'js-cookie'


const HRVAnalysis = (props) => {
  const navigate = useNavigate();

  const [trend, setTrend] = useState(true)

  useEffect(()=>{
    if(!Cookies.get("accessToken")){
        console.log("no Token");
        setTimeout(()=> {
            navigate("/signin")
        })
        
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



  const goBack =(e)=>{
    e.preventDefault() 
    window.history.back()
  }

  props.setModule("Cardio Hrv Analysis")
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
        <CAnalyseCont>
          <NavigationCont>
            <EditCont>
              <EditorButton onClick={goBack}><TbArrowBackUp/>Back</EditorButton>
            </EditCont>
            <PreviousCont>
            </PreviousCont>
            <LinksCont>
              <EditorButton>Trend Analysis</EditorButton>
              <EditorButton>PointCare Plots</EditorButton>
            </LinksCont>
          </NavigationCont>
          <GraphicalCont>
            <GraphsSection>
              <ChartSection>
                  <Yaxis>
                    <YHeads>0.4</YHeads>
                    <YHeads>0.2</YHeads>
                    <YHeads>0</YHeads>
                    <YHeads>-0.2</YHeads>
                    <YHeads>-0.4</YHeads>
                  </Yaxis>                    
                <ChartCont>s
                  <IntervalNumber width={230} height={190}/>
                </ChartCont>
              </ChartSection>
              <ChartSection>
                  <Yaxis>
                    <YHeads>0.4</YHeads>
                    <YHeads>0.2</YHeads>
                    <YHeads>0</YHeads>
                    <YHeads>-0.2</YHeads>
                    <YHeads>-0.4</YHeads>
                  </Yaxis>                    
                <ChartCont>
                  <RRChart width={230} height={190}/>
                </ChartCont>
                
              </ChartSection>
              <ChartSection>
                  <Yaxis>
                    <YHeads>0.4</YHeads>
                    <YHeads>0.2</YHeads>
                    <YHeads>0</YHeads>
                    <YHeads>-0.2</YHeads>
                    <YHeads>-0.4</YHeads>
                  </Yaxis>                    
                <ChartCont1>
                  <ECGChart width={150} height={100}/>
                </ChartCont1>
                
              </ChartSection>
              <ChartSection>
                  <Yaxis>
                    <YHeads>0.4</YHeads>
                    <YHeads>0.2</YHeads>
                    <YHeads>0</YHeads>
                    <YHeads>-0.2</YHeads>
                    <YHeads>-0.4</YHeads>
                  </Yaxis>                    
                <ChartCont>
                  <HRVRr width={230} height={190}/>
                </ChartCont>

              </ChartSection>

            </GraphsSection>
            <AbnormalitiesCont>
                <HRVGraphCont>
                <Yaxis>
                    <YHeads>0.4</YHeads>
                    <YHeads>0.2</YHeads>
                    <YHeads>0</YHeads>
                    <YHeads>-0.2</YHeads>
                    <YHeads>-0.4</YHeads>
                  </Yaxis> 
                  <ChartContL>
                    <ECGChart width={530} height={100}/>
                  </ChartContL>
                </HRVGraphCont>
                <HRVReportCont>
                  <VitalMonitor>
                    <MonitorHead>HRV Reports</MonitorHead>
                    <MonitorExt><CgArrowsExpandRight/></MonitorExt>
                  </VitalMonitor>
                  <HRVReportLeft>
                    <HRVGeneral>
                      <HRVHead>General</HRVHead>
                      <DetailBody>
                        <Head>Name</Head>
                        <Value>Number of Reports</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Jhon</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Smith</Head>
                        <Value>4</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Mathew</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Sara</Head>
                        <Value>3</Value>
                      </DetailBody>
                    </HRVGeneral>
                    <HRVDomain>
                      <HRVHead>Time-Domain</HRVHead>
                      <>
                      <DetailBody>
                        <Head>Name</Head>
                        <Value>Number of Reports</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Bill</Head>
                        <Value>1</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Mark</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Watson</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Liana</Head>
                        <Value>1</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Suza</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Smith</Head>
                        <Value>5</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Karim</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Mueen</Head>
                        <Value>2</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Asif</Head>
                        <Value>2</Value>
                      </DetailBody>
                      </>
                    </HRVDomain>
                  </HRVReportLeft>
                  <HRVReportRight>
                    <HRVHead>General</HRVHead>
                    <>
                      <DetailBody>
                        <Head>Name</Head>
                        <Value>Number of Reports</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Jhon</Head>
                        <Value>1</Value>
                      </DetailBody>
                      <DetailBody>
                        <Head>Jeff</Head>
                        <Value>3</Value>
                      </DetailBody>
                    </>
                    <HRVTableReport>
                    
                      <DetailBody1>
                        <Head>Name</Head>
                        <Value>Reports</Value>
                        <Head>Name</Head>
                        <Value>Reports</Value>
                      </DetailBody1>
                      <DetailBodyD>
                        <Head>Obina</Head>
                        <Value>1</Value>
                        <Head>Amston</Head>
                        <Value>1</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Berry</Head>
                        <Value>2</Value>
                        <Head>Stephon</Head>
                        <Value>3</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Pitter</Head>
                        <Value>3</Value>
                        <Head>Gale</Head>
                        <Value>4</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Winzed</Head>
                        <Value>5</Value>
                        <Head>Elina</Head>
                        <Value>4</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Mitsha</Head>
                        <Value>10</Value>
                        <Head>Gory</Head>
                        <Value>1</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Smake</Head>
                        <Value>2</Value>
                        <Head>Nitshan</Head>
                        <Value>5</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Safeer</Head>
                        <Value>12</Value>
                        <Head>Mikel</Head>
                        <Value>2</Value>
                      </DetailBodyD>
                      <DetailBodyD>
                        <Head>Steph</Head>
                        <Value>6</Value>
                        <Head>Neel</Head>
                        <Value>8</Value>
                      </DetailBodyD>
                    </HRVTableReport>
                  
                  </HRVReportRight>

                </HRVReportCont>
            </AbnormalitiesCont>
          </GraphicalCont>
        </CAnalyseCont>
      </Main>
    </>
  )
}

export default HRVAnalysis;