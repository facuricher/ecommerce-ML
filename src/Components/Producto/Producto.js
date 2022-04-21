
const Producto = props =>{
    const {nombre, precio, descripcion, thumbnail} = props

    return(
        <div>
            <img src={thumbnail} alt="imagen del producto"></img>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <button>Comprar</button>
        </div>
    )
}

export default Producto