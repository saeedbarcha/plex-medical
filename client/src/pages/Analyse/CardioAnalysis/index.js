import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ECGChart from '../../../components/Charts/LineChart/Ecg'
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
  AbnormalitiesCont,
  ArchiveCont,
  VitalMonitor,
  MonitorHead,
  MonitorExt,
  ArchiveFoldCont,
  ReportsFold,
  ReportsHead
} from './CardioAnalysisElements'
import {AiOutlineSelect} from 'react-icons/ai'
import {CgArrowsExpandRight} from 'react-icons/cg'
import {BiErrorAlt} from 'react-icons/bi'
import {BsFillArrowRightCircleFill,BsPen} from 'react-icons/bs'
import {TbZoomInArea,TbArrowBackUp} from 'react-icons/tb'
import Cookies from 'js-cookie'


const CardioAnalysis = (props) => {
  const navigate = useNavigate();

  const [trend, setTrend] = useState(false)

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

  const handleHrv =()=> {
    navigate('/hrvanalyse')
  }

  const goBack =(e)=>{
    e.preventDefault() 
    
    window.history.back()
    props.setModule("Cardio Module")
  }

  props.setModule("Cardio Analyse")
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
              <EditorButton><AiOutlineSelect/>Select</EditorButton>
              <EditorButton><BsPen/>Annotation</EditorButton>
              <EditorButton><TbZoomInArea/>Zoom</EditorButton>
            </EditCont>
            <PreviousCont>
            <EditorButton onClick={goBack}><TbArrowBackUp/>Previous Page</EditorButton>
            </PreviousCont>
            <LinksCont>
              <EditorButton onClick={handleHrv}>Trend Analysis</EditorButton>
              <EditorButton>PointCare Plots</EditorButton>
              <EditorButton>Predictive Analysis</EditorButton>
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
                <ChartCont>
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
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
                  <ECGChart width={300} height={70}/>
                </ChartCont>
              </ChartSection>

            </GraphsSection>
            <AbnormalitiesCont>
          <ArchiveCont>
            <VitalMonitor>
              <MonitorHead>Abnormalities</MonitorHead>
              <MonitorExt><CgArrowsExpandRight/></MonitorExt>
            </VitalMonitor>
            <ArchiveFoldCont>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
              <ReportsFold>
                <BiErrorAlt style={{color: "#eb6969"}}/>
                <ReportsHead>Name of abnormalities</ReportsHead>
                <BsFillArrowRightCircleFill style={{color: "#eb6969"}}/>
              </ReportsFold>
            </ArchiveFoldCont>
          </ArchiveCont>

            </AbnormalitiesCont>
          </GraphicalCont>
        </CAnalyseCont>
      </Main>
    </>
  )
}

export default CardioAnalysis;