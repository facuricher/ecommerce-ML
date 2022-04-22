import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Password = (props) =>{

    const {title, placeholder} = props

    const[pwd, setPwd]= useState('')
    const[isRevealPwd, setIsRevealPwd]= useState(false)

    return(
        <div>
            <label>
                {title}
                <input
                    placeholder={placeholder}
                    type={isRevealPwd ? 'text' : 'password'}
                    value= {pwd}
                    onChange={(e)=> setPwd(e.target.value)}
                />
                <div
                    title={isRevealPwd ? 'hide password' : 'show password'}
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                >
                    {
                    isRevealPwd ? <AiFillEyeInvisible/> : <AiFillEye/>
                    }
                </div>
            </label>
        </div>
    )
}

export default Password;