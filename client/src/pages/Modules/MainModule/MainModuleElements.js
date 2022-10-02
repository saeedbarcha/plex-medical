import styled from 'styled-components'
import Log from '../Images/log.png'

export const Main = styled.div `
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    align-items : center;
`

export const StatCont = styled.div `
    width : 30%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    row-gap: 3vh;
`

export const StatDetails = styled.div `
    width: 90%;
    height: 18vh;
    display : flex;
    flex-direction: row;
    justify-content: space-around;    
`

export const Detail1 = styled.div `
    width: 40%;
    height: 97%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`

export const DetailHead = styled.h4 `
    color: #fff;
    /* font-family: corbel; */
    font-weight: 600;
    display: flex;
    height: 6vh;
    align-items: baseline;
`

export const DetailBody = styled.div `
    width: 65%;
    display : flex;
    justify-content : space-between;
    flex-direction : row;
`

export const Head = styled.h5 `
    color: #00a99d;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const Value = styled.h5 `
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const Detail2 = styled.div `
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
`

export const Span = styled.span `
    color: #00a99d;
    margin: 0;
    font-size: 36px;
    font-weight: 400;
`


export const PredictiveCont = styled.div `
    width: 90%;
    height: 46vh;
    border-radius: 15px;
    background: url(${Log}), #1e1f24;
    background-size : cover;
`

export const SimulationCont = styled.div `
    width: 85%;
    height: auto;
    align-self: center;
`
export const SimulationHead = styled.div `
    color: #fff;
    font-family: corbel;
    font-weight: 600;
    height: 5vh;
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


export const ModelCont = styled.div `
    width : 25%;
    height : 95%;
    display : flex;
    justify-content : center;
    align-items : center;
`

export const ModelImg = styled.img `
    width : 100%;
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