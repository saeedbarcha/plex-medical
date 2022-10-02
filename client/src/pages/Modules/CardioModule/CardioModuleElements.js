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
    justify-content: space-between;
`

export const SystemCont = styled.div `
    width: 100%;
    height: 50%;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const DiagramCont = styled.div `
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Diagram = styled.img `
    height: 90%;
    transition : 0.3s all ease-in-out;

    &:hover {
        transition : 0.3s all ease-in-out;
        transform : scale(1.1,1.1);
    }
`


export const ECGCont = styled.div `
    width: 100%;
    height: 48%;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const GroupButtons = styled.div `
    width: 85%;
    height: 4vh;
    border: 1px solid #525252;
    border-radius: 6px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    flex-direction : row;
    overflow : hidden;
`

export const OptionButton = styled.button `
    width: 24%;
    height: 100%;
    border: none;
    border-radius: 5px;
    background: #282c38;
    color: #fff;
    font-family: corbel light;
    transition : 0.3s all ease-in-out;
    cursor : pointer;

    &:hover {
        background : #0f6663;
        transition : 0.3s all ease-in-out;
    }
    &:focus {
        background : #0f6663;
        transition : 0.3s all ease-in-out;
    }
`

export const GraphCont = styled.div `
    width: 85%;
    height: 26vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const GraphTitle = styled.div `
    width: 100%;
    height: 25%;
`
export const Title = styled.h5 `
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-size: 9px;
    font-family: corbel;
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