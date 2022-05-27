import { Link } from "react-router-dom"
import {Card,Button,Col} from "react-bootstrap"
const styles = {
    img:{
        width:"100px",
        backgroundColor:"red",
    },
    Card:{
        width:"18rem",
        minHeigth:"500px",
        marginBottom:"10px"
    }
}

const Producto = props =>{
    const {nombre, precio, descripcion,children,id, thumbnail} = props

    return(
        <>
            <Col>
                <Card style={styles.Card}>
                    <Card.Img src={thumbnail} alt="imagen del producto" variant="top" style={styles.img}/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Card.Text>${precio || ''}</Card.Text>
                        {children}
                        <Button>Comprar</Button>

                        <Button variant="link" as={Link} to={`/producto/${id}`}>ver detalle</Button>
                        
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Producto