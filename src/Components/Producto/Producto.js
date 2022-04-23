import { Link } from "react-router-dom"

const Producto = props =>{
    const {nombre, precio, descripcion,children,id, thumbnail} = props

    return(
        <div>
            <img src={thumbnail} alt="imagen del producto"></img>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p>{precio || ''}</p>
            {children}
            <button>Comprar</button>
            <Link to={`/producto/${id}`}>VER DETALLE</Link>
        </div>
    )
}

export default Producto