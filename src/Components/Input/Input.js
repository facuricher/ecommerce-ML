import { Form } from "react-bootstrap";

const Input = (props) => {
    const {label, type, placeholder, name, change, register}= props
    return(
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{label}</Form.Label>    
                    <Form.Control
                        onChange={change}
                        placeholder={placeholder}
                        type={type || "text"}
                        name={name || ""}
                        {...register}
                    />
            </Form.Group>
        </>
    )
}

export default Input;