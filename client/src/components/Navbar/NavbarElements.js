import styled from 'styled-components'

export const Main = styled.div `
    width : 100%;
    height : 15vh;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    flex-direction : row;
    z-index: 111;
    position: absolute;
    background : #101012;
`

export const LogoCont = styled.div `
    width: 30%;
    height: 80%;
    display: flex;
    align-items: center;
`

export const LogoMain = styled.img `
    width: 30%;
`

export const HeadCont = styled.h3 `
    height: 80%;
    width: 30%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 22px;
`

export const NavItems = styled.div `
    height : 80%;
    width : 30%;
    display : flex;
    align-items : center;
    justify-content: space-evenly;
`

export const ProfileHead = styled.div `
    width : 50%;
    display : flex;
    flex-direction : column;
    align-items: flex-end;
`

export const ProfileName = styled.h5 `
    margin : 0;
    font-family: corbel light;
    font-weight: 500;
    font-size: 14px;
    color : #fff;
`

export const ProfileId = styled.p `
    margin : 0;
    font-family: monospace;
    font-size: 11px;
    color : #fff;
`

export const ProfilePic = styled.div `
    width: 8%;
    height: 40%;
    border-radius: 18px;
    border: 2px solid #00a99d;
    overflow: hidden;
    box-shadow: 0px 0px 6px 0px #326867;;
`

export const ProfileImg = styled.img `
    width : 100%;
    height : 100%;
    border : none;
`
export const ProfileLogout = styled.div `
    width : 8%;
    height : 40%;
    cursor : pointer;
`

export const LogStyle = {
    width : "100%",
    height : "100%",
    color : "#fff"
}