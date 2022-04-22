import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IconLogo,
        IconLogoMobile,
        Menu,
        MenuItem,
        NavbarContainer,
        NavbarWrapper }
        from './styled.js';
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
                        Ecommerce-ML
                    </IconLogo>

                    <IconLogoMobile onClick= {()=> changeClick()}>
                        {
                            click ? <FaTimes/> : <FaBars/>
                        }
                    </IconLogoMobile>

                    <Menu click={click}>
                        <MenuItem onClick= {()=> changeClick()}>
                            <Link to='/'>Home</Link>
                        </MenuItem>
                        <MenuItem onClick= {()=> changeClick()}>
                            <Link to='/alta'>Checkin</Link>
                        </MenuItem>
                        <MenuItem onClick= {()=> changeClick()}>
                            <Link to='/ingresar'>Login</Link>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar;