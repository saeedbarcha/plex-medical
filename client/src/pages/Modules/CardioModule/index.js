import React, { Suspense, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { 
  Main,
  StatCont,
  SystemCont,
  DiagramCont,
  Diagram,
  ECGCont,
  GroupButtons,
  OptionButton,
  GraphCont,
  GraphTitle,
  Title,
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
} from './CardioModuleElements';
import { Canvas } from '@react-three/fiber';
import Heart from '../Images/heart.png'
import Coronary from '../Images/coronary.png'
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



const CardioModule = (props) => {
  const group = useRef()

  return (
    <>
    <Main>
      <StatCont>
        <SystemCont>
          <VitalMonitor>
            <MonitorHead>Coronary System Map</MonitorHead>
            <MonitorExt><CgArrowsExpandRight/></MonitorExt>
          </VitalMonitor>
          <DiagramCont>
            <Diagram src={Coronary}></Diagram>
          </DiagramCont>

        </SystemCont>
        <ECGCont>
          <VitalMonitor>
            <MonitorHead>ECG</MonitorHead>
            <MonitorExt><CgArrowsExpandRight onClick={props}/></MonitorExt>
          </VitalMonitor>
          <GroupButtons>
            <OptionButton autoFocus>oVL oVR oVT</OptionButton>
            <OptionButton>I II III</OptionButton>
            <OptionButton>V1 V2 V3</OptionButton>
            <OptionButton>V4 V5 V6</OptionButton>
          </GroupButtons>
          <GraphCont>
            <GraphTitle>
              <Title>oVL</Title>
              <CVPChart width={350} height={35} data={ecgData}/>
            </GraphTitle>
            <GraphTitle>
              <Title>oVR</Title>
              <CVPChart width={350} height={35} data={ecgData}/>
            </GraphTitle>
            <GraphTitle>
              <Title>oVT</Title>
              <CVPChart width={350} height={35} data={ecgData}/>
            </GraphTitle>
          </GraphCont>
        </ECGCont>

      </StatCont>
      <ModelCont>
        <ModelImg src={Heart}></ModelImg>
        
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
              <CVPChart data={ecgData}  width={400} height={40}/>
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
    </>
  )
}

export default CardioModule;