import styled from 'styled-components'

export const Main = styled.div `
    width: 100%;
    height: 100vh;
    background: #101012;
    display: flex;
    justify-content: flex-end;
`

export const ModuleCont = styled.div `
    width: 93%;
    height: 100vh;
    background : #101012;
    display : flex;
    justify-content: flex-end;
    align-items : center;
    flex-direction : column;
`

export const ModuleToggle = styled.div `
    width: 26%;
    height: 6vh;
    display: flex;
    column-gap: 14px;
    align-items: center;
    justify-content: flex-start;
    z-index: 111;
`

export const ToggleIcon = styled.img `
    width: 24px;
`

export const SwitchNav = styled.button `
    width: 20%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: #00a99d;
    color: #fff;
`
export const SwitchNav_Active = styled.button `
    width: 20%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: #fff;
    color: #00a99d;
`

export const ModuleAnalytics = styled.div `
    width: 100%;
    height: 82vh;
`
