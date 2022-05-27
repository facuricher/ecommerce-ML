import styled  from 'styled-components'

const yellow = "#fff159";
const black = "#333"

export const NavbarContainer = styled.div `
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color:${yellow} ;
`

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    color: ${black};
    padding-left: 1rem;
`

export const Menu = styled.ul`
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    @media screen and (max-width:960px) {
        width:100%;
        height:90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color:${yellow};
    }
`

export const MenuItem =styled.li`
    height:100%;
    padding: 0.5rem 1.5rem;
    display:flex;
    align-items:center;
    font-size:1.2rem;
    font-weight: 400;
    &:hover{
        background-color:yellow;
        border-bottom:0.3rem solid ${black};
        transition:0.4s ease-in;
    }
    @media screen and (max-width:960px){
        width:100%;
        height:100px;
    }

    a{
        text-decoration: none;
        color:${black};
    }
`

export const IconLogoMobile = styled.div`
    display: none;
    @media screen and (max-width:960px) {
        display: flex;
        color:${black};
        font-size:  2rem;
        padding-right:1rem;
    }
`