import styled from 'styled-components'

export const Main = styled.div `
    width : 70%;
    height : 90%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
`

export const FormCont = styled.div `
    width : 100%;
    height : 100%;
    display : flex;
    justify-content: space-evenly;
    align-items : center;
    flex-direction : column;
    background-color : #1e1f24;
    border-radius: 12px;    
`

export const FormHead = styled.h5 `
    width: 85%;
    height: 4vh;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 17px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormBody = styled.div `
    width: 85%;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

export const Em = styled.div `
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 5px;
`

export const SvgStyle = {
    height: "80%",
    width: "8%",
    color : "#00a99e"
}

export const FormInputDiv =styled.div `
    width: 40%;
    height: 5vh;
    margin: 6px 15px;
    padding: 2px 0 2px 8px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #0c3e3d;
    display : flex;
    justify-content : space-between;
    align-items : center; 
`

export const FormInput = styled.input `
    width: 100%;
    border: none;
    background: transparent;
    height: 100%;
    text-align: center;
    transition : all ease-in-out 0.3s;
    color : #dadee3;

    &:focus {
        width: 80%;
        outline : none;
        text-align: start;
        transition : all ease-in-out 0.3s;
    }
`

export const FormSelect = styled.select `
    width: 100%;
    border: none;
    background: transparent;
    height: 100%;
    text-align: center;
    transition : all ease-in-out 0.3s;
    color : #677568;

    &:focus {
        width: 80%;
        outline : none;
        // padding: 0px 5px;
        text-align: start;
        transition : all ease-in-out 0.3s;
    }
`

export const FormOption = styled.option `
    background : #1e1f24;
    border-radius : 5px;
    color : #00a99e;
`

export const FormButton = styled.button `
    width: 50%;
    height: 6vh;
    border-radius: 8px;
    border: none;
    background : #00a99e;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 17px;
    transition : 0.3s all ease-in-out;
    cursor : pointer;

    &:hover {
        width: 52%; 
        color : #00a99e;
        background : #2e5252;
        transition : 0.3s all ease-in-out;
        font-weight : 700;
        border : 1px solid #00a99e;
        box-shadow: 0px 2px 11px 0px #326867;
    }
`

export const ToggleSwitchCont = styled.div `
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    row-gap: 4%;
`

export const ToggleButton = styled.button `
    width: 100%;
    height: 6vh;
    border-radius: 8px;
    border: none;
    background: #1e1f24;
    color: #00a99e;
    font-family: corbel light;
    font-weight: 500;
    font-size: 17px;
    -webkit-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    &:hover {
        width: 100%; 
        color : #00a99e;
        background : #2e5252;
        transition : 0.3s all ease-in-out;
        font-weight : 700;
        border : 1px solid #00a99e;
        box-shadow: 0px 2px 11px 0px #326867;
    }
`