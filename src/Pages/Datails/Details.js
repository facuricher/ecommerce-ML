import React,{useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import {getByIdProducts} from '../../Service/productsServices'

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
            <div>
                <img src={producto.thumbnail} alt='imagen del producto'/>
                <p>{producto.title}</p>
                <p>${producto.price}</p>
            </div>
        )
    }
}

export default Details;