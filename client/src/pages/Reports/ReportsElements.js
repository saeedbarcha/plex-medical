import styled from 'styled-components'

export const Main = styled.div `
    width: 100%;
    height: 100vh;
    background: #101012;
    display: flex;
    justify-content: flex-end;
`

export const ReportCont = styled.div `
    width: 93%;
    height: 100vh;
    background : #101012;
    display : flex;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction : row;
`

export const GenerateCont = styled.div `
    width : 68%;
    height : 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const ProcessCont = styled.div `
    width: 90%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ProcessContGroup = styled.div `
    width: 22%;
    height: 6vh;
    display: flex;
    background: #393a3f;
    border-radius: 16px;
    border-bottom-right-radius: 35px;
    border-top-right-radius: 35px;
    justify-content: space-between;
    align-items: center;
`

export const IndexCont = styled.div `
    width: 20%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconStyle1 = {
    color: "#fff",
    background: "#101012",
    borderRadius: "10px",
    padding: "3px",
    fontSize: "14px"
}

export const HeadCont = styled.h5 `
    margin: 0;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 12px;
`

export const ProcessIcon = styled.div `
    background: #101012;
    border: 1px solid #101012;
    width: 24%;
    height: 100%;
    display: flex;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`

export const IconStyle2 ={
    color: "#00a99d",
    borderRadius: "14px",
    padding: "3px",
    fontSize: "22px"
}
export const IconStyle3 ={
    color: "#fff",
    borderRadius: "14px",
    padding: "3px",
    fontSize: "22px"
}

export const SelectionCont = styled.div `
    width: 90%;
    height: 63vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const SelectCont = styled.div `
    width: 32%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #1e1f24;
    border-radius: 12px;
    
`
export const SelectionContHead = styled.h5 `
    width: 85%;
    height: 4vh;
    color: #fff;
    margin: 0;
    font-size: 14px;
    font-family: corbel light;
    font-weight: 200;
`

export const SelectOptionCont = styled.div `
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 3px;
`

export const OptionGroup = styled.div `
    width: 100%;
    height: 5vh;
    display: flex;
    background: #393a3f;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
`

export const PersonIcon = styled.div `
    width: 20%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OptionHead = styled.h5 `
    width: 60%;
    color: #fff;
    margin: 0;
    font-size: 11px;
    font-family: corbel light;
    font-weight: 200;
    text-align: center;
`
export const OptionCheck = styled.input `
    width: 20%;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const GenerateButtonCont = styled.div `
    width: 95%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const GenerateButtonHead = styled.h5 `
    width: 40%;
    height: 2vh;
    color: #fff;
    margin: 0;
    font-size: 16px;
    font-family: corbel light;
    font-weight: 500;
    text-align: center;
`

export const GenerateButton = styled.button `
    width: 40%;
    height: 6vh;
    border-radius: 10px;
    background-color: #00a99d;
    color: #fff;
    font-family: corbel;
    font-size: 18px;
    cursor : pointer;
`


export const ArchiveCont = styled.div `
    width: 30%;
    height: 85vh;
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