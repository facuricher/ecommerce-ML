import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Password = (props) =>{

    const {title, placeholder} = props

    const[pwd, setPwd]= useState('')
    const[isRevealPwd, setIsRevealPwd]= useState(false)

    const valor= (e) => {
        setPwd(e.target.value)
    }

    return(
        <div>
            <label>
                {title}
                <input
                    placeholder={placeholder}
                    type={isRevealPwd ? 'text' : 'password'}
                    value= {pwd}
                    onChange={valor}
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