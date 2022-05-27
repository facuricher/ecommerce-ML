import Productos from "../../Components/Productos/Productos";
import Carrusel from '../../Components/Carrusel/Carrusel';

const Home = () =>{

    return(
        <div>
            <div>
                <Carrusel/>
                <h1>Productos</h1>
                <Productos/>
            </div>
        </div>
    )
}

export default Home;