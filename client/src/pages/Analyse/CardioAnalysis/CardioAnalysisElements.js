import styled from 'styled-components'
import Grid from '../../../components/Charts/Images/Grid.png'

export const Main = styled.div `
    width: 100%;
    height: 100vh;
    background: #101012;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

`

export const CAnalyseCont = styled.div `
    width: 93%;
    height: 85vh;
    background : #101012;
    display : flex;
    justify-content: space-between;
    align-items: center;
    flex-direction : column;
`

export const NavigationCont = styled.div `
    width: 95%;
    height: 5vh;
    display : flex;
`

export const EditCont = styled.div `
    width : 30%;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
`

export const EditorButton = styled.button `
    width: 26%;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #101012;
    border: 1px solid #dadee3;
    color: #ffff;
    border-radius: 6px;
    font-size: 12px;
    font-family: corbel;
    font-weight: 300;
    transition : 0.3s all ease-in-out;
    cursor : pointer;

    &:hover {
        transition : 0.3s all ease-in-out;
        border: 1px solid #00a99d;
        color: #ffff;
        background: #00a99d;
    }
`

export const PreviousCont = styled.div `
    width : 30%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
`

export const LinksCont = styled.div `
    width : 35%;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
`


export const GraphicalCont = styled.div `
    width: 95%;
    height: 78vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

`

export const GraphsSection = styled.div `
    width: 65%;
    height: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 10px;
    justify-content: space-evenly;
    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
      
    ::-webkit-scrollbar-track {
        background: #1e1f24; 
    }
       
    ::-webkit-scrollbar-thumb {
        background: #282c38; 
    }
      
    ::-webkit-scrollbar-thumb:hover {
        background: #5535; 
    }
`

export const ChartSection = styled.div `
    width: 375px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1f24;
    border-radius: 10px;
`
export const Yaxis = styled.div ` 
    width: 20px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const YHeads = styled.h5 `
    color: #fff;
    font-size: 8px;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const ChartCont = styled.div `
    width: 345px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1f24;
    border-radius: 8px;
    background : url(${Grid});
    background-size: cover;
    background-position: bottom;
`

export const AbnormalitiesCont = styled.div `
    width : 30%;
    height : 78vh;
`


export const ArchiveCont = styled.div `
    width: 100%;
    height: 98%;
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

export const ArchiveFoldCont = styled.div `
    width: 85%;
    height: 90%;
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
    height : 5vh;
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