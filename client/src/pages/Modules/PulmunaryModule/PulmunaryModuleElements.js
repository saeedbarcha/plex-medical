import styled from 'styled-components'

export const Main = styled.div `
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    align-items : center;
`

export const StatCont = styled.div `
    width: 30%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const GraphCont = styled.div `
    width: 100%;
    height: 32%;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ScaleCont = styled.div `
    width: 95%;
    height: 18vh;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: column;

`
export const Yaxis = styled.div ` 
    width: 40px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const YHeads = styled.h5 `
    margin : 0;
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
    font-size : 10px;
`
export const Xaxis = styled.div `
    width: 305px;
    height: 3vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
export const Xheads = styled.h5 `
    margin : 0;
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
    font-size : 10px;
`

export const ModelCont = styled.div `
    width : 25%;
    height : 95%;
    display : flex;
    flex-direction: column;
    justify-content : space-between;
    align-items : center;
`

export const ModelImgCont = styled.div `
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const ModelImg = styled.img `
    width : 100%;
`
export const ModelStatsCont = styled.div `
    width : 100%;
    height : 30%;
    display : flex;
    flex-direction: column;
    justify-content : space-around;
    align-items : center;
`
export const BreathScaleCont = styled.div `

`
export const BreathScaleHead = styled.h4 `
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 22px;
    margin : 0;
`
export const BreathScaleValue = styled.h4 `
    color: #00a99d;
    font-weight: 300;
    font-size: 22px;
    margin: 0;
    text-align: center;
`

export const SimulationCont = styled.div `
    width: 70%;
    height: auto;
    align-self: center;
`
export const SimulationHead = styled.div `
    color: #fff;
    font-family: corbel;
    font-weight: 500;
    height: 5vh;
    text-align: center;
`

export const SimulationBody = styled.div `
    width: 100%;
    display : flex;
    justify-content : space-between;
    flex-direction : row;
`

export const SiHead = styled.h5 `
    color: #00a99d;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const SiValue = styled.h5`
    color: #fff;
    margin: 0;
    font-weight: 300;
`

export const ReportsCont = styled.div `
    width: 40%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const MonitorCont = styled.div `
    width: 100%;
    height: 50%;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const VitalMonitor = styled.div `
    width: 85%;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MonitorHead = styled.h5 `
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const MonitorExt = styled.span `
    color: #00a99d;
    font-size: 16px;
`

export const MonitorChart = styled.div `
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

`

export const ChartHead = styled.h5 `
    width: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 8px;
    font-weight: 400;
`

export const HeadSpan = styled.span `
    color: #00a99d;
    font-size: 15px;
    font-weight: 600;

`


export const ArchiveCont = styled.div `
    width: 100%;
    height: 48%;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ArchiveFoldCont = styled.div `
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap : 10px;
    padding-top: 10px;
    overflow-y: hidden;
    scroll-behavior: smooth;
`

export const ReportsFold = styled.div `
    width : 100%;
    height : 4vh;
    display : flex;
    flex-direction : row;
    justify-content: space-evenly;
    align-items : center;
    background : #393a3f;
    color : #fff;
    border-radius : 5px;
`

export const ReportsHead = styled.h5 `
      width : 75%;
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`