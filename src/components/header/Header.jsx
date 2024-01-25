import { useContext } from 'react';
import './Header.scss';
import { CartContext } from '../../context/CartProvider';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
function Header({search}) {
    const navigate = useNavigate();
    const {cantidadTotal} = useContext(CartContext);
    const handleSearch = (e) => {
        e.preventDefault();
        search(e.target.value);
    }
    const vamosAlCarro = (e) => {
        e.preventDefault();
        navigate('/cart')
    }
    return (
        <>
            <header className="header">
                <div className="container-bmk">
                    <section className="header_navegation">
                        <span>Bienvenido a nuestra tienda virtual</span>
                        <nav className="header_navegation_nav">
                            <ul>
                                <li><a className="no-subrayado" href="/marketplace">Tienda</a></li>
                                <li><a className="no-subrayado" href="/about">Nosotros</a></li>
                                <li><a className="no-subrayado" href="/preguntas_frecuentes">¿Cómo comprar?</a></li>
                                <li><a className="no-subrayado" href="/preguntas_frecuentes">Preguntas frecuentes</a></li>
                                <li><a className="no-subrayado" href="/contact">Contacto</a></li>
                            </ul>
                        </nav>
                    </section>
                    <section className="header_search">
                        <ul className="header_search_redes">
                            <li>
                                <a href="https://www.facebook.com/BmkJoyasPeru/" target="_blank" rel="noreferrer">
                                    <img src="../../../assets/svg icons/icons-redes-sociales-blanco-completos/icons-facebook-blanco.svg" alt="logoFacebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/BmkJoyasPeru/" target="_blank" rel="noreferrer">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/icons-instagram-blanco.svg" alt="logoInstagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.pe/913010384" target="_blank" rel="noreferrer">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/whatsapp-blanco.svg" alt="logoWhatsapp" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/BmkJoyasPeru/" target="_blank" rel="noreferrer">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/messenger-blanco.svg" alt="logoMessenger" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@bmkjoyasplata950" target="_blank" rel="noreferrer">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/tiktok-blanco.svg" alt="logoTikTok" />
                                </a>
                            </li>
                        </ul>
                        <a className="header_search_a" href="/" title="BMK Joyas Perú S.A.C.">
                            <img className="header_search_a_img" src="../assets/logo-jmk-joyas-transparente.jpeg" alt="logotipo de BMK Joyas Perú S.A.C." />
                        </a>
                        <ul className="header_search_buscador">
                            <li className="search-form">
                                <form>
                                    <input type="search" name="search" placeholder="Buscar productos ..."  onChange={handleSearch}/>
                                    <button>
                                        <img src="/assets/svg icons/icons8-lupa (9).svg" alt="search" />
                                    </button>
                                </form>
                            </li>
                            <li>
                                <a href="/Login">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/user-blanco.svg" alt="logo de usuario" title="Hola inicia sesión o Regístrate" />
                                </a>
                            </li>
                            <li>
                                <div className='d-flex justify-content-center align-items-center'>
                                    {cantidadTotal()}
                                </div>
                                <a href="/cart" onClick={vamosAlCarro}>
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/shopping-cart-blanco.svg" alt="icono de carro de compras" title="Carro de compras" />
                                </a>
                            </li>
                            <li>
                                <a href="/wishlist" >
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/heart-blanco.svg" alt="Lista de favoritos" title="Lista de Favoritos" />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </header>
        </>
    )
}

Header.propTypes = {
    search: PropTypes.func,
};
export default Header;