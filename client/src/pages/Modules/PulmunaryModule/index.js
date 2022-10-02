import React from 'react'
import { 
  Main,
  StatCont,
  GraphCont,
  ScaleCont,
  Yaxis,
  YHeads,
  Xaxis,
  Xheads,
  ModelCont,
  ModelImg,
  ModelImgCont,
  ModelStatsCont,
  BreathScaleCont,
  BreathScaleHead,
  BreathScaleValue,
  SimulationCont,
  SimulationHead,
  SimulationBody,
  SiHead,
  SiValue,
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
} from './PulmunaryModuleElements';
import LungModel from '../Images/lung.png'
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
import PulChart from '../../../components/Charts/AreaChart/Pul';
import { data1 } from '../../Data/data1';

const PulmunaryModule = () => {
  return (
    <Main>
      <StatCont>
        <GraphCont>
          <VitalMonitor>
            <MonitorHead>Capillaries PH</MonitorHead>
            <MonitorExt><CgArrowsExpandRight/></MonitorExt>
          </VitalMonitor>
          <ScaleCont>
            <Yaxis>
              <YHeads>100</YHeads>
              <YHeads>80</YHeads>
              <YHeads>60</YHeads>
              <YHeads>40</YHeads>
              <YHeads>20</YHeads>
              <YHeads>0</YHeads>
            </Yaxis>
            <PulChart data={data1} width={305} height={90}/>
            <Xaxis>
              <Xheads>0</Xheads>
              <Xheads>0.25</Xheads>
              <Xheads>0.50</Xheads>
              <Xheads>0.75</Xheads>
              <Xheads>1</Xheads>
              <Xheads>1.25</Xheads>
              <Xheads>1.50</Xheads>
              <Xheads>1.75</Xheads>
              <Xheads>2</Xheads>
            </Xaxis>
          </ScaleCont>
        </GraphCont>
        <GraphCont>
          <VitalMonitor>
            <MonitorHead>Capillaries PH</MonitorHead>
            <MonitorExt><CgArrowsExpandRight/></MonitorExt>
          </VitalMonitor>
          <ScaleCont>
            <Yaxis>
              <YHeads>100</YHeads>
              <YHeads>80</YHeads>
              <YHeads>60</YHeads>
              <YHeads>40</YHeads>
              <YHeads>20</YHeads>
              <YHeads>0</YHeads>
            </Yaxis>
            <PulChart data={data1} width={305} height={90}/>
            <Xaxis>
              <Xheads>0</Xheads>
              <Xheads>0.25</Xheads>
              <Xheads>0.50</Xheads>
              <Xheads>0.75</Xheads>
              <Xheads>1</Xheads>
              <Xheads>1.25</Xheads>
              <Xheads>1.50</Xheads>
              <Xheads>1.75</Xheads>
              <Xheads>2</Xheads>
            </Xaxis>
          </ScaleCont>
        </GraphCont>
        <GraphCont>
          <VitalMonitor>
            <MonitorHead>Capillaries PH</MonitorHead>
            <MonitorExt><CgArrowsExpandRight/></MonitorExt>
          </VitalMonitor>
          <ScaleCont>
            <Yaxis>
              <YHeads>100</YHeads>
              <YHeads>80</YHeads>
              <YHeads>60</YHeads>
              <YHeads>40</YHeads>
              <YHeads>20</YHeads>
              <YHeads>0</YHeads>
            </Yaxis>
            <PulChart data={data1} width={305} height={90}/>
            <Xaxis>
              <Xheads>0</Xheads>
              <Xheads>0.25</Xheads>
              <Xheads>0.50</Xheads>
              <Xheads>0.75</Xheads>
              <Xheads>1</Xheads>
              <Xheads>1.25</Xheads>
              <Xheads>1.50</Xheads>
              <Xheads>1.75</Xheads>
              <Xheads>2</Xheads>
            </Xaxis>
          </ScaleCont>
        </GraphCont>
      </StatCont>
      <ModelCont>
        <ModelImgCont>
          <ModelImg src={LungModel}></ModelImg>
        </ModelImgCont>
        <ModelStatsCont> 
          <BreathScaleCont>
            <BreathScaleHead>Rate of Breating</BreathScaleHead>
            <BreathScaleValue>20 rpm</BreathScaleValue>
          </BreathScaleCont>
          <SimulationCont>
            <SimulationHead>Current Simulation</SimulationHead>
              <SimulationBody>
                <SiHead>Organism Lifespan</SiHead>
                <SiValue>00:02:32</SiValue>
            </SimulationBody>
          </SimulationCont>
        </ModelStatsCont>
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
              <ChartHead><HeadSpan>630</HeadSpan> Breathing Volume</ChartHead>
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

export default PulmunaryModule;