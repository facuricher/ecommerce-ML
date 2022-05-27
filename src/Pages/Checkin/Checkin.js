import Input from "../../Components/Input/Input";
//import Password from "../../Components/Password/Password";
import {useForm} from "react-hook-form"
import firebase from "../../Config/firebase";
import {Form, Button,Alert} from "react-bootstrap"


const Checkin = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit =async (data)=>{
        console.log("Form",data)
        try {
            const responseUser = await  firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
            console.log("responseUser", responseUser)
            if(responseUser.user.uid){
            const document =  await firebase.firestore().collection("usuarios")
                .add({
                    name: data.name,
                    lastName : data.lastName,
                    userId : responseUser.user.uid
                })
                console.log("document", document)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Checkin</h1>
            <Form  onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label= "Name"
                    placeholder='Enter name'
                    register= {{...register("name", { required: true })}}
                />
                <Alert>
                    <Alert.Heading>
                        {errors.name && <span>This field is required</span>}
                    </Alert.Heading>
                </Alert>
                <Input
                    label= "Last Name"
                    placeholder='Enter Last name'
                    register= {{...register("lastName", { required: true })}}
                />
                <Alert>
                    <Alert.Heading>
                        {errors.lastName && <span>This field is required</span>}
                    </Alert.Heading>
                </Alert>
                <Input
                    label= "Email"
                    type="email"
                    placeholder='YourEmail@gmail.com'
                    register= {{...register("email", { required: true })}}
                />
                <Alert>
                    <Alert.Heading>
                        {errors.email && <span>This field is required</span>}
                    </Alert.Heading>
                </Alert>
                <Input
                    label= "Phone number"
                    type= "number"
                    placeholder='enter number'
                    register= {{...register("number", { required: true })}}
                />
                <Alert>
                    <Alert.Heading>
                        {errors.number && <span>This field is required</span>}
                    </Alert.Heading>
                </Alert>
                <Input
                    label= "Password"
                    type= "password"
                    placeholder='enter password'
                    register= {{...register("password", { required: true })}}
                />
                <Alert>
                    <Alert.Heading>
                        {errors.password && <span>This field is required</span>}
                    </Alert.Heading>
                </Alert>
                <div>
                    <Button type="submit">Enviar</Button>
                </div>
            </Form>
        </div>
    )
}

export default Checkin;