import './grid.scss';
import '../logo/logo.scss';
import './products.scss';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { useState, useEffect, useContext} from 'react';
import { CartContext } from '../../context/CartProvider.jsx';
const ProductosJoyas = {
    items: [

        {
            "id": 1,
            "categoria": "Pulseras",
            "titulo": "Pulsera 1",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "60.00",
            redirect: '/pulseras',
            "img": "Copia_de_P_197_Peso_10_0_gr.png",
            offer_hidden: 'offer',
        },
        {
            "id": 2,
            "categoria": "Pulseras",
            "titulo": "Pulsera 2",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "90.00",
            redirect: '/pulseras',
            "img": "Copia_de_P_200_Peso_10_9_gr.png",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 3,
            "categoria": "Pulseras",
            "titulo": "Pulsera 3",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "70.00",
            redirect: '/pulseras',
            "img": "Copia_de_P_201_Peso_12_0_gr_1.png",
            offer_hidden: 'offer ',
        },
        {
            "id": 4,
            "categoria": "Pulseras",
            "titulo": "Pulsera 4",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "59.90",
            redirect: '/pulseras',
            "img": "Copia_de_P_202_Peso_9_3_gr.png",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 5,
            "categoria": "Pulseras",
            "titulo": "Pulsera 5",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "39.90",
            redirect: '/pulseras',
            "img": "Copia_de_P_205_Peso_10_3_gr.png",
            offer_hidden: 'offer ',
        },
        {
            "id": 6,
            "categoria": "Pulseras",
            "titulo": "Pulsera 6",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "158.90",
            redirect: '/pulseras',
            "img": "Copia-de_P_196_Peso_9_9_gr.png",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 7,
            "categoria": "Pulseras",
            "titulo": "Pulsera 7",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "180.90",
            redirect: '/pulseras',
            "img": "Copia-de-P-194-Peso-10.2_gr.png",
            offer_hidden: 'offer ',
        },
        {
            "id": 8,
            "categoria": "Anillos",
            "titulo": "Anillo 1",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "40.00",
            redirect: '/anillos',
            "img": "AN_120_Peso_2.7_gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 9,
            "categoria": "Anillos",
            "titulo": "Anillo 2",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "59.90",
            redirect: '/anillos',
            "img": "AN_123_Peso_3_2_gr.jpg",
            offer_hidden: 'offer ',
        },
        {
            "id": 10,
            "categoria": "Anillos",
            "titulo": "Anillo 3",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "49.50",
            redirect: '/anillos',
            "img": "AN_126_Peso_2_0_gr.jpg",
            offer_hidden: 'offer ',
        },
        {
            "id": 11,
            "categoria": "Anillos",
            "titulo": "Anillo 4",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "35.90",
            redirect: '/anillos',
            "img": "AN_145_Peso_2.8_gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 12,
            "categoria": "Anillos",
            "titulo": "Anillo 5",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "47.90",
            redirect: '/anillos',
            "img": "AN_153_Peso_4_7_gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 13,
            "categoria": "Anillos",
            "titulo": "Anillo 6",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "35.90",
            redirect: '/anillos',
            "img": "AN_164_Peso_2_3_gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 14,
            "categoria": "Anillos",
            "titulo": "Anillo 7",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "29.90",
            redirect: '/anillos',
            "img": "AN_166_Peso_2_3_gr.jpg",
            offer_hidden: 'offer',
        },
        {
            "id": 15,
            "categoria": "Anillos",
            "titulo": "Anillo 8",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "37.90",
            redirect: '/anillos',
            "img": "AN_169_Peso_3_1_gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 16,
            "categoria": "Anillos",
            "titulo": "Anillo 9",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "48.90",
            redirect: '/anillos',
            "img": "AN_175_Peso_1_7_gr.jpg",
            offer_hidden: 'offer',
        },
        {
            "id": 17,
            "categoria": "Anillos",
            "titulo": "Anillo 10",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "59.90",
            redirect: '/anillos',
            "img": "AN_177_Peso_2_8_gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 18,
            "categoria": "Anillos",
            "titulo": "Anillo 11",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "46.90",
            redirect: '/anillos',
            "img": "AN_181_Peso_2_1_gr.jpg",
            offer_hidden: 'offer',
        },
        {
            "id": 19,
            "categoria": "Anillos",
            "titulo": "Anillo 12",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "39.90",
            redirect: '/anillos',
            "img": "AN_183 _Peso_2_8 _gr.jpg",
            offer_hidden: 'offer hidden',
        },
        {
            "id": 20,
            "categoria": "Anillos",
            "titulo": "Anillo 13",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80",
            priceOferta: "45.90",
            redirect: '/anillos',
            "img": "AN_192_Peso2.4_gr.jpg",
            offer_hidden: 'offer',
        }
    ]
};

export default function Marketplace() {
    const {addProduct} = useContext(CartContext);
    const [productos, setProductos] = useState([]);
    const [allProductos, setAllProductos]  = useState([]);

    useEffect(() => {
        setProductos(ProductosJoyas.items);
        setAllProductos(ProductosJoyas.items);
    }, [])
    
    const search = (value) => {
        const result = allProductos.filter((item) => {
            return item.titulo.toLowerCase().includes(value.toLowerCase());
        })
        setProductos(result);
    }   

    const filter = (e) => {
        e.preventDefault();
        const filterValue = e.target.ariaValueNow;
        const result = allProductos.filter((item) => {
            return item.categoria.toLowerCase().includes(filterValue.toLowerCase());
        })
        setProductos(result);
    }

    const assetsPath = "/assets/productos";
    return (
        <>
            <Header search={search}/>

            <div className="container-marketplace claseMarketplace">

                    <div className="rowCustomizable">

                        <div className="col-xs-12 col-s-12 col-m-3 col-l-3">
                            <h4 className= 'titulo-categ' >CATEGORIAS</h4>
                            <hr />
                            <ul id="menu">
                                <li><a href="/marketplace" onClick={filter} className="active" aria-valuenow={'Pulseras'}>Pulseras</a></li>
                                <li><a href="/marketplace">Aretes</a></li>
                                <li><a href="/marketplace" onClick={filter} aria-valuenow={'Anillos'}>Anillos</a></li>
                                <li><a href="/marketplace">Dijes</a></li>
                                <li><a href="/marketplace">Juegos</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-xs-12 col-s-12 col-m-9 col-l-9 contenedor-pulseras">

                            <div className="rowCustomizable">
                                <h1 className="title-products">Pulseras</h1>
                                <div className="col-xs-12">

                                    <select className="select-order">
                                        <option>Precio más bajo</option>
                                        <option>Precio más alto</option>
                                        <option>Por opiniones</option>
                                        <option>Por descuentos</option>
                                    </select>

                                </div>

                                <div>
                                    {productos.map(elem => (
                                        <div key={elem.id} >
                                            <div className="col-s-6 col-m-4 product-box">
                                                <div className='product-box2'>
                                                    <a href="/product" className="product-box">
                                                        <div>
                                                            <img className="img-products" src={`${assetsPath}${elem.redirect}/${elem.img}`} alt={`${elem.categoria}`} />
                                                        </div>
                                                        <h4 >{elem.categoria}</h4>
                                                        <h4>{elem.titulo}</h4>
                                                        <h4> {elem.peso} </h4>
                                                        <h4>{elem.medida}</h4>
                                                        <strong className="price"> <del><strong>{`${elem.price}`}</strong></del> <span>{` S/${elem.priceOferta}`}</span> <span className= {`${elem.offer_hidden}`}> OFF</span></strong>
                                                    </a>
                                                </div>
                                                <button onClick= { (e) => { 
                                                    e.preventDefault();
                                                    addProduct(elem)}} className="button" value={'asdasdd'}>
                                                    <img className="img-logo" src="/assets/svg icons/icons-redes-sociales-blanco-completos/shopping-cart-blanco.svg" alt="Lista del Carrito de compras" title="Añadir a la lista de Compras" />
                                                    <p>Agregar a Carrito</p>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                                
                                {/* <button onClick= { () => console.log (carrito) } > Mostrar carrito </button> */}
                                <div className="col-xs-12">
                                    <ul className="pagination-marketplace">
                                        <li><a href="/marketplace" className="active">1</a></li>
                                        <li><a href="/marketplace">2</a></li>
                                        <li><a href="/marketplace">3</a></li>
                                        <li>...</li>
                                        <li><a href="/marketplace">10</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

// function Carrito () {
//     <button onClick= { () => console.log (carrito) } > Mostrar carrito </button>
// }