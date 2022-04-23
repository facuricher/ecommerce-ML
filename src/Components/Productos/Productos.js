import { useState, useEffect } from "react";
import { getAllProducts } from "../../Service/productsServices";
import Producto from "../Producto/Producto";

const Productos = () =>{
    const [listadoProductos, setListadoProductos] = useState([])
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true)
    //const [buscar, setBuscar] = useState('Mcbook')
    const [keyword, setKeyword] = useState('')

    useEffect(
        ()=>{
            const request = async ()=>{
                try{

                    const response = await getAllProducts(keyword)
                    setListadoProductos(response.data.results)
                    setResponse(response.data)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
            }
            request()
        },
        [keyword]
    )

    const handleSubmit= evt =>{
        evt.preventDefault()
        console.log(keyword)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    if (loading){
        return <div>loading...</div>
    }else{
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='text' value={keyword}/>
                </form>
                <h2>cantidad de productos {response?.paging?.total}</h2>
                {listadoProductos.map(listadoProducto=><Producto nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail}/>)}
            </div>
        )
    }
}

export default Productos