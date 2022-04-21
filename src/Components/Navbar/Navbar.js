import React, {useState}from 'react'
import { IconLogo,
        IconLogoMobile,
        Menu, 
        MenuItem,
        MenuItemLink, 
        NavbarContainer, 
        NavbarWrapper } 
        from './styled';
import { FaReact } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
     const [click, setClick] = useState(false)

     const changeClick = ()=>{
         setClick(!click)
     }

    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                    <FaReact size={'2em'}/>
                        blogeate
                    </IconLogo>

                    <IconLogoMobile onClick= {()=> changeClick()}>
                        {
                            click ? <FaTimes/> : <FaBars/>
                        }
                    </IconLogoMobile>

                    <Menu click={click}>
                        <MenuItem onClick= {()=> changeClick()}>
                            <MenuItemLink>HOME</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick= {()=> changeClick()}>
                            <MenuItemLink>CHECK IN</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick= {()=> changeClick()}>
                            <MenuItemLink>ABOUT US</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick= {()=> changeClick()}>
                            <MenuItemLink>CONTACT</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar;