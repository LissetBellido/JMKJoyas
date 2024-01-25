import Header from '../header/Header';
import Footer from '../footer/Footer';
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';
import './products.scss';
export default function Cart() {
    
    const  {getProducts, cantidadTotal, getTotalPrice} = useContext(CartContext);
    const assetsPath = "/assets/productos";
    return (
        <>
            <Header />
                    <main className="container-bmk">
                        <h3 className="centrar-texto h3-about">Carro de Compras</h3>
                        {
                            cantidadTotal() != 0 ? getProducts().map((item) => (
                                <>
                                    <div className='container'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='d-flex justify-content-between '>
                                                    <div>
                                                        <h3 className='card-title'>Producto: {item.titulo}</h3>
                                                        <p className='card-text'>Peso: {item.peso}</p>
                                                        <p className='card-text'>Cantidad: {item.quantity}</p>
                                                    </div>
                                                    <div >
                                                        <img src={`${assetsPath}${item.redirect}/${item.img}`} alt={item.titulo} className='img-products' />
                                                    </div>
                                                </div>
                                                <div className='card-footer'>
                                                    <span className='card-price'>{item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </>
                            )) : (<><br /><h3 className="text-center m-5 p-5">No hay productos en el carrito</h3> <br /></>)
                        }
                        <h3>Total: S/. {getTotalPrice()}</h3>                       
                    </main>
            <Footer />
        </>
    );
}