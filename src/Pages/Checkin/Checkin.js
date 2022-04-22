import Password from "../../Components/Password/Password";

const Checkin = () =>{
    return(
        <div>
            <h1>Checkin</h1>
            <form  onSubmit={(event) =>event.preventDefault()}>
                <label>
                    Name
                    <input
                        placeholder='Enter name'
                        type='text'
                    />
                </label>
                <label>
                    Last name 
                    <input
                        placeholder='Enter Last name'
                        type='text'
                    />
                </label>
                <label>
                    Email
                    <input
                        placeholder='YourEmail@gmail.com'
                        type='text'
                    />
                </label>
                <label>
                  Phone number
                    <input
                        placeholder='Enter phone number'
                        type='number'
                    />
                </label>

                <Password
                    title= "Password"
                    placeholder= "enter password"
                />

                <Password
                    title= "Repeat password"
                    placeholder= "repeat password"
                />
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Checkin;