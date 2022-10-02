import React, { useState } from 'react'
import { 
  Main,
  StatCont,
  StatDetails,
  Detail1,
  DetailHead,
  DetailBody,
  Head,
  Value,
  Detail2,
  Span,
  PredictiveCont,
  SimulationCont,
  SimulationHead,
  SimulationBody,
  SiHead,
  SiValue,
  ModelCont,
  ModelImg,
  ReportsCont,
  MonitorCont,
  VitalMonitor,
  MonitorHead,
  MonitorExt,
  MonitorChart,
  ChartHead,
  HeadSpan,
  ArchiveCont,
  ArchiveFoldCont,
  ReportsFold,
  ReportsHead
} from './MainModuleElements';
import MaleModel from '../Images/male.png'
import FemaleModel from '../Images/female.png'
import { data } from '../../Data/Data';
import { ecgData } from './ecgdata';
import BPMChart from '../../../components/Charts/AreaChart/Bpm';
import ASPChart from '../../../components/Charts/AreaChart/Asp';
import CVPChart from '../../../components/Charts/AreaChart/Cvp';
import P02Chart from '../../../components/Charts/AreaChart/P02';
import BVolChart from '../../../components/Charts/AreaChart/BVol';
import {CgArrowsExpandRight} from 'react-icons/cg'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const MainModule = () => {
  const [gender, setGender] = useState("female")

  return (
    <Main>
      <StatCont>
        <StatDetails>
          <Detail1>
            <DetailHead>Stat</DetailHead>
            <>
            <DetailBody>
              <Head>BPM</Head>
              <Value>75</Value>
            </DetailBody>
            <DetailBody>
              <Head>ASP</Head>
              <Value>110/75</Value>
            </DetailBody>
            </>
          </Detail1>
          <Detail2>
          <DetailHead>
          <Span>27</Span> RPM
          </DetailHead>
            <>
              <DetailBody>
                <Head>CVP</Head>
                <Value>75</Value>
              </DetailBody>
              <DetailBody>
                <Head>PD2</Head>
                <Value>104</Value>
              </DetailBody>
            </>
          </Detail2>
        </StatDetails>
        <PredictiveCont>

        </PredictiveCont>
        <SimulationCont>
          <SimulationHead>Current Simulation</SimulationHead>
            <SimulationBody>
              <SiHead>Organism Lifespan</SiHead>
              <SiValue>00:02:32</SiValue>
          </SimulationBody>
        </SimulationCont>
      </StatCont>
      <ModelCont>
        {gender == "male" ?
          <ModelImg src={MaleModel}></ModelImg>
          :  
          <ModelImg src={FemaleModel}></ModelImg>
        }
      </ModelCont>
      <ReportsCont>
        <MonitorCont>
          <VitalMonitor>
            <MonitorHead>Vitals Monitor</MonitorHead>
            <MonitorExt><CgArrowsExpandRight/></MonitorExt>
          </VitalMonitor>
          <>
            <MonitorChart>
              <ChartHead><HeadSpan>75</HeadSpan> BPM</ChartHead>
              <BPMChart data={data}/>
            </MonitorChart>
            <MonitorChart>
              <ChartHead><HeadSpan style={{color : "#9a575a"}}>110/75</HeadSpan> ASP</ChartHead>
              <ASPChart data={data}/>
            </MonitorChart>
            <MonitorChart>
            <ChartHead><HeadSpan>75</HeadSpan> CVP</ChartHead>
              <CVPChart data={ecgData} width={400} height={40}/>
            </MonitorChart>
            <MonitorChart>
              <ChartHead><HeadSpan>104</HeadSpan> P02</ChartHead>
              <P02Chart data={data}/>
            </MonitorChart>
            <MonitorChart>
              <ChartHead><HeadSpan>630</HeadSpan> Breathing Vol</ChartHead>
              <BVolChart data={data}/>
            </MonitorChart>
          </>

        </MonitorCont>
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
      </ReportsCont>
    </Main>
  )
}

export default MainModule;