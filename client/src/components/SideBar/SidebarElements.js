import styled from 'styled-components'

export const Main = styled.div `
    width: 7%;
    height: 100vh;
    background: transparent;
    position: fixed;
    display : flex;
    align-items: flex-end;

`

export const SideBarCont = styled.div `
    width: 100%;
    height: 85vh;
    background: #1e1f24;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
`

export const ModelAnalytics = styled.div `
    display: flex;
    flex-wrap: wrap;
    row-gap: 7px;
    padding-bottom : 12px;
`


export const SidebarItems = styled.div `
    width : 100%;
    height : 8vh;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    background : #282c38;
    color : #00a99d;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor : pointer;
    
    &:hover {
        outline: none;
        opacity: .9;
        color: white;
        background-color: #00a99d;
        box-shadow: 0px 0px 2px red;
    }
    &:focus {
        opacity: .9;
    }
`

export const ItemsHead = styled.h5 `
    width: 60%;
    color: #fff;
    margin: 0;
    font-size: 11px;
    font-family: corbel light;
    font-weight: 200;
    text-align: center;
`

export const Breaker = styled.div `
    width: 60%;
    margin: auto;
    border-top: 2px solid #282c38;
`

export const ContSettings = styled.div `
    display: flex;
    flex-wrap: wrap;
    row-gap: 7px;
    padding-top : 12px;
`