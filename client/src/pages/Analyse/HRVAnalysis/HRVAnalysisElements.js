import styled from 'styled-components'
import Grid1 from '../../../components/Charts/Images/Grid1.png'
import Grid2 from '../../../components/Charts/Images/Grid2.png'
import Grid3 from '../../../components/Charts/Images/Grid3.png'

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
    width: 48%;
    height: 76vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 8px;
    justify-content: space-evenly;
`

export const ChartSection = styled.div `
    width: 48%;
    height: 48%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1f24;
    border-radius: 16px;
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
export const ChartCont = styled.div `
    width: 85%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1f24;
    border-radius: 8px;
    background : url(${Grid1});
    background-size: cover;
    background-position: bottom;
`

export const ChartCont1 = styled.div `
    width: 85%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #1e1f24;
    border-radius: 8px;
    background : url(${Grid2});
    background-size: cover;
    background-position: bottom;
`

export const AbnormalitiesCont = styled.div `
    width: 50%;
    height: 76vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const ArchiveCont = styled.div `
    width: 100%;
    height: 99%;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const HRVGraphCont = styled.div `
    width: 100%;
    height: 20vh;
    background: #1e1f24;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChartContL = styled.div `
    width: 95%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #1e1f24;
    border-radius: 8px;
    background : url(${Grid3});
    background-size: cover;
    background-position: bottom;
`
export const HRVReportCont = styled.div `
    width: 100%;
    height: 55vh;
    display: flex;
    flex-wrap: wrap;
    border-radius: 16px;
    background: #1e1f24;
    justify-content: center;
`

export const VitalMonitor = styled.div `
    width: 95%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MonitorHead = styled.h5 `
    width: 90%;
    text-align: center;
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const MonitorExt = styled.span `
    color: #00a99d;
    font-size: 16px;
`

export const HRVReportLeft = styled.div `
    width: 48%;
    height: 48vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const HRVGeneral = styled.div `
    width: 92%;
    height: 37%;
    background: #333439;
    border-radius: 16px;
    overflow : hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const HRVHead = styled.h5 `
    margin: 0;
    width: 100%;
    height: 4vh;
    background: #284a4c;
    color: #fff;
    font-family: corbel light;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DetailBody = styled.div `
    width: 60%;
    display : flex;
    justify-content : space-around;
    flex-direction : row;
    align-self: flex-start;
`

export const Head = styled.h5 `
    color: #fff;
    margin:0px;
    width: 40%;
    font-weight: 300;
    font-family: corbel;
    font-size: 10px;
    /* text-align: center; */
    padding-left: 10px;
    
`

export const Value = styled.h5 `
    color: #fff;
    margin: 0;
    width: 50%;
    font-weight: 300;
    font-family: corbel;
    font-size: 10px;
`

export const HRVDomain = styled.div `
    width: 92%;
    height: 60%;
    background: #333439;
    border-radius: 16px;
    overflow : hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const HRVReportRight = styled.div `
    width: 48%;
    height: 48vh;
    background: #333439;
    border-radius: 16px;
    display: flex;
    justify-content : space-between;
    flex-direction: column;
    align-items: center;
    overflow : hidden;

`

export const HRVTableReport = styled.div `
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`

export const DetailBody1 = styled.div `
    width: 82%;
    display : flex;
    justify-content : space-between;
    flex-direction : row;
    border-bottom: 1px solid #00a99d;
`

export const DetailBodyD = styled.div `
    width: 82%;
    display : flex;
    justify-content : space-between;
    flex-direction : row;
`