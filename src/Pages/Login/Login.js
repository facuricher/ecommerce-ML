import Input from "../../Components/Input/Input";
import {useForm} from "react-hook-form"
import firebase from "../../Config/firebase";
import { Form, Button } from "react-bootstrap";

const Login = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit =async (data)=>{
        console.log("Form",data)
        try {
          const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
          console.log("responseUser",responseUser.user.uid)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <Form  onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label= "Email"
                    type="email"
                    placeholder='YourEmail@gmail.com'
                    register= {{...register("email", { required: true })}}
                />
                {errors.email && <span>This field is required</span>}
                <Input
                    label= "Password"
                    type= "password"
                    placeholder='enter password'
                    register= {{...register("password", { required: true })}}
                />
                {errors.password && <span>This field is required</span>}
                <div>
                    <Button type="submit">Ingresar</Button>
                </div>
            </Form>
        </div>
    )
}

export default Login;