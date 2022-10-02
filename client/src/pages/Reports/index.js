import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../../components/SideBar';
import {
  Main,
  ReportCont,
  GenerateCont,
  ProcessCont,
  ProcessContGroup,
  IndexCont,
  IconStyle1,
  HeadCont,
  ProcessIcon,
  IconStyle2,
  IconStyle3,
  SelectionCont,
  SelectCont,
  SelectionContHead,
  SelectOptionCont,
  OptionGroup,
  PersonIcon,
  OptionHead,
  OptionCheck,
  GenerateButtonCont,
  GenerateButtonHead,
  GenerateButton,
  ArchiveCont,
  VitalMonitor,
  MonitorHead,
  MonitorExt,
  ArchiveFoldCont,
  ReportsFold,
  ReportsHead
} from './ReportsElements'
import {RiNumber1,RiNumber2,RiNumber3,RiNumber4} from 'react-icons/ri'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {CgArrowsExpandRight} from 'react-icons/cg'
import {BsFillArrowRightCircleFill,BsCheckCircleFill,BsPersonCircle} from 'react-icons/bs'
import Cookies from 'js-cookie';


const Reports = (props) => {
  const [patients, setPatients] = useState([])
  const [selectPatient, setSelectPatient] = useState()
  const [selectTemplate, setSelectTemplate] = useState("")
  const [selectModule, setSelectModule] = useState("")
  const [generateReport, setGenerateReport] = useState(false)
  
  const navigate = useNavigate();

  const getPatients = ()=>{
    axios.get(`${process.env.REACT_APP_MAIN_URL}/getusers`)
    .then((res)=>{
      setPatients(res.data)
    })
  } 


 let downloadTxtFile = () => {
   
    const element = document.createElement('a')
    let newResult = `
    Patient Name:${selectPatient.username} \n
    Age : ${selectPatient.age} \n
    Gender :${selectPatient.gender} \n
    illness : ${selectModule} \n
    status : ....
    `
  


  const file = new Blob([newResult], {
    type: 'txt/html/pdf/PDF',
  })
  element.href = URL.createObjectURL(file)
  element.download = 'myFile.PDF'
  document.body.appendChild(element) // Required for this to work in FireFox
  element.click()
}
///////////////////////////

  const checkGenerate = () =>{
    if(!selectPatient == "" &&
      !selectTemplate == "" &&
      !selectModule == ""
      ){
        setGenerateReport(true)
      }
  }
  
  useEffect(()=>{
    if(!Cookies.get("accessToken")){
      console.log("no Token");
      setTimeout(()=> {
          navigate("/signin")
      })
    } 
    getPatients()
    checkGenerate();
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

  props.setModule("Reports")
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
        <ReportCont>
          <GenerateCont>
            <ProcessCont>
              <ProcessContGroup style={selectPatient == "" ? null : {background: "#00a99d"}}>
                <IndexCont>
                  <RiNumber1 style={IconStyle1}/>
                </IndexCont>
                <HeadCont>Select Patient</HeadCont>
                <ProcessIcon>
                  {selectPatient == "" ? <BsFillArrowRightCircleFill style={IconStyle3}/> : <BsCheckCircleFill style={IconStyle2}/> }
                </ProcessIcon>
              </ProcessContGroup>
              <ProcessContGroup style={selectTemplate == "" ? null : {background: "#00a99d"}}>
                <IndexCont>
                  <RiNumber2 style={IconStyle1}/>
                </IndexCont>
                <HeadCont>Select template</HeadCont>
                <ProcessIcon>
                  {selectTemplate == "" ? <BsFillArrowRightCircleFill style={IconStyle3}/> : <BsCheckCircleFill style={IconStyle2}/> }
                </ProcessIcon>
              </ProcessContGroup>
              <ProcessContGroup style={selectModule == "" ? null : {background: "#00a99d"}}>
                <IndexCont>
                  <RiNumber3 style={IconStyle1}/>
                </IndexCont>
                <HeadCont>Select Module</HeadCont>
                <ProcessIcon>
                  {selectModule == "" ? <BsFillArrowRightCircleFill style={IconStyle3}/> : <BsCheckCircleFill style={IconStyle2}/> }
                </ProcessIcon>
              </ProcessContGroup>
              <ProcessContGroup style={generateReport ? {background: "#00a99d"} : null}>
                <IndexCont>
                  <RiNumber4 style={IconStyle1}/>
                </IndexCont>
                <HeadCont>Generate Report</HeadCont>
                <ProcessIcon>
                  {generateReport ? <BsCheckCircleFill style={IconStyle2}/> : <BsFillArrowRightCircleFill style={IconStyle3}/> }
                </ProcessIcon>
              </ProcessContGroup>
            </ProcessCont>
            <SelectionCont>
              <SelectCont>
                <SelectionContHead>Patients</SelectionContHead>
                <SelectOptionCont>
                {
                  patients.map(pl =>{
                    return (
                        <OptionGroup key={pl._id}>
                          <PersonIcon><BsPersonCircle/></PersonIcon>
                          <OptionHead>{pl.username}</OptionHead>
                          <OptionCheck type="radio" value={pl.username} name='patient' onChange={()=>setSelectPatient(pl)}></OptionCheck>
                        </OptionGroup>

                    )
                  })
                }
                </SelectOptionCont>
              </SelectCont>
              <SelectCont>
                <SelectionContHead>Templates</SelectionContHead>
                <SelectOptionCont>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>ECG Holter</OptionHead>
                    <OptionCheck type="radio" value="ECG Holter" name='template' onChange={(e)=>setSelectTemplate(e.target.value)}></OptionCheck>
                  </OptionGroup>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>Pulmunary Report</OptionHead>
                    <OptionCheck type="radio" value="Pulmunary Report" name='template' onChange={(e)=>setSelectTemplate(e.target.value)}></OptionCheck>
                  </OptionGroup>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>Vital Signs Report</OptionHead>
                    <OptionCheck type="radio" value="Vital Signs Report" name='template' onChange={(e)=>setSelectTemplate(e.target.value)}></OptionCheck>
                  </OptionGroup>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>Custom Report</OptionHead>
                    <OptionCheck type="radio" value="Custom Report" name='template' onChange={(e)=>setSelectTemplate(e.target.value)}></OptionCheck>
                  </OptionGroup>
                </SelectOptionCont>
              </SelectCont>
              <SelectCont>
                <SelectionContHead>Modules</SelectionContHead>
                <SelectOptionCont>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>Main Module</OptionHead>
                    <OptionCheck type="radio" value="Main Module" name='module' onChange={(e)=>setSelectModule(e.target.value)}></OptionCheck>
                  </OptionGroup>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>Pulmunary Module</OptionHead>
                    <OptionCheck type="radio" value="Pulmunary Module" name='module' onChange={(e)=>setSelectModule(e.target.value)}></OptionCheck>
                  </OptionGroup>
                  <OptionGroup>
                    <PersonIcon><BsPersonCircle/></PersonIcon>
                    <OptionHead>Cardio Module</OptionHead>
                    <OptionCheck type="radio" value="Cardio Module" name='module' onChange={(e)=>setSelectModule(e.target.value)}></OptionCheck>
                  </OptionGroup>
                </SelectOptionCont>
              </SelectCont>
            </SelectionCont>
            <GenerateButtonCont>
              <GenerateButtonHead>
                Ready to Go
              </GenerateButtonHead>
              {generateReport ? <GenerateButton onClick={downloadTxtFile}>Generate Report</GenerateButton> : <GenerateButton style={{background : "#393a3f"}}>Generate Report</GenerateButton> }
            </GenerateButtonCont>
          </GenerateCont>
          <ArchiveCont>
            <VitalMonitor>
              <MonitorHead>Archive</MonitorHead>
              <MonitorExt><CgArrowsExpandRight/></MonitorExt>
            </VitalMonitor>
            <ArchiveFoldCont>
              <ReportsFold>
                <AiOutlineFolderOpen style={{color: "#00a99d"}}/>
                <ReportsHead>Past Report</ReportsHead>
                <BsFillArrowRightCircleFill/>
              </ReportsFold>
              <ReportsFold>
                <AiOutlineFolderOpen style={{color: "#00a99d"}}/>
                <ReportsHead>Past Report</ReportsHead>
                <BsFillArrowRightCircleFill/>
              </ReportsFold>
              <ReportsFold>
                <AiOutlineFolderOpen style={{color: "#00a99d"}}/>
                <ReportsHead>Past Report</ReportsHead>
                <BsFillArrowRightCircleFill/>
              </ReportsFold>
              <ReportsFold>
                <AiOutlineFolderOpen style={{color: "#00a99d"}}/>
                <ReportsHead>Past Report</ReportsHead>
                <BsFillArrowRightCircleFill/>
              </ReportsFold>
              <ReportsFold>
                <AiOutlineFolderOpen style={{color: "#00a99d"}}/>
                <ReportsHead>Past Report</ReportsHead>
                <BsFillArrowRightCircleFill/>
              </ReportsFold>
            </ArchiveFoldCont>
          </ArchiveCont>
        </ReportCont>
      </Main>
    </>
  )
}

export default Reports;