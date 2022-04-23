import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Img } from './styled';

const Carrusel = () =>{
    return(

        <Carousel>
            <Carousel.Item>
                <Img
                className="d-block w-100"
                src= "https://d2zftyvti5s458.cloudfront.net/wp-content/uploads/2019/12/cancelaciones-768x432.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Compra online sin moverte de tu casa</h3>
                <p>visita nuestra pagina web desde WWW.mercadoLibre.com</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Img
                className="d-block w-100"
                src="https://media.ambito.com/p/1d50e494d70fd77424efbabf9405d439/adjuntos/239/imagenes/039/695/0039695718/mercado-librejpg.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>descargate nuestra app</h3>
                <p>ahora tambien en app mobiles para androind e Ios</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Img
                className="d-block w-100"
                src="https://radiografica.org.ar/wp-content/uploads/2021/05/mercado-libre.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>envios gratis</h3>
                <p>una vez realizada tu compra el pedido llega a la puerta de tu casa</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrusel;