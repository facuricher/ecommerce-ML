import Password from "../../Components/Password/Password";

const Login = () =>{
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={(event) =>event.preventDefault()}>
                <label>
                    User name
                    <input
                    placeholder='Enter user name'
                    type='text'
                    />
                </label>

                <Password
                    title='Password'
                    placeholder='enter password'
                />

            </form>
        </div>
    )
}

export default Login;