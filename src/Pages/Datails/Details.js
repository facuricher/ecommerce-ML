import React,{useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import {getByIdProducts} from '../../Service/productsServices'
import { Button, Card } from "react-bootstrap"
const styles = {
    img:{
        width:"300px",
        height:"300px",
        backgroundColor:"red",
    }
}

const Details = () =>{
    const{id} = useParams()
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(
        () =>{
            const request = async()=>{

                try{
                    setLoading(false)
                    const response = await getByIdProducts(id)
                    console.log('response', response)
                    setProducto(response.data)
                    setLoading(false)

                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
            }

            request()
        },[id]
    )

    if (loading){
        return <div>Loading..</div>
    }else{
        return(
            <Card>
                <Card.Body>
                    <Card.Img src={producto.thumbnail} alt='imagen del producto' style={styles.img}/>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>${producto.price}</Card.Text>
                    <Button>Comprar</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Details;