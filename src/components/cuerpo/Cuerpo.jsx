import './categorias.scss'
import './empresaRegistrada.scss'
import './mediosPago.scss'
import './formasEnvio.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../marketplace/grid.scss';

const categoriasJoyas = {
    path: 'icons-categorias-joyas',
    items: [
        {id: 'bracelet', img: 'bracelet.svg', title: 'Pulseras', description: 'icono pulseras', redirect: '/marketplace', classCategorias: '_pulseras', grid: 'col-xs-12 col-m-6 col-l-6'},
        {id: 'earrings', img: 'earrings-2.svg', title: 'Aretes', description: 'icono aretes', redirect: '/marketplace',  classCategorias: '_aretes', grid: 'col-xs-12 col-m-3 col-l-3'},
        {id: 'engagementRing', img: 'engagement-ring.svg', title: 'Sortijas', description: 'icono sortijas', redirect: '/marketplace', classCategorias: '_sortijas', grid: 'col-xs-12 col-m-3 col-l-3'} ,
        {id: 'brooch', img: 'brooch.svg', title: 'Dijes', description: 'icono de dijes', redirect: '/marketplace', classCategorias: '_dijes ', grid: 'col-xs-12 col-m-3 col-l-3'},
        {id: 'juegos', img: 'juegos.svg', title: 'Juegos', description: 'icono de juegos', redirect: '/marketplace', classCategorias: '_juegos', grid: 'col-xs-12 col-m-3 col-l-3'},
        
    ]
};

export const Cuerpo = () => {
    const assetsPath = "/assets";
    return (
        <>
            <Header />
            <main className="main">
                <div className="main_container ">
                    <section className="main_container_categorias">
                        {categoriasJoyas.items.map(elem => (
                            <div key={elem.id}
                            className={`main_container_categorias${elem.classCategorias} ${elem.grid}`}>
                                <a href={elem.redirect}
                                className='no-subrayado'>
                                    <h1>{elem.title}</h1>
                                    <img src={`${assetsPath}/${categoriasJoyas.path}/${elem.img}`}
                                    alt={elem.description} />
                                </a>
                            </div>
                        ))}
                    </section>

                    <section className="formas_envio">
                        <h1>Formas de envío</h1>
                        <ul>
                            <li><img src="../../../assets/logosFormasDeEnvio/logoDhl.svg" alt="logo de DHL" /></li>
                            <li><img src="../../assets/logosFormasDeEnvio/logo-flores.png" alt="logo de Flores" /></li>
                            <li><img src="../../assets/logosFormasDeEnvio/logo-olva.svg" className="logo_olva" alt="logo de Olva Courrier" /></li>
                            <li><img src="../../assets/logosFormasDeEnvio/logo-shalom.svg" alt="logo de Shalom" /></li>
                        </ul>
                    </section>

                    <section className="medios_de_pago">
                        <h1>Medios de pago</h1>
                        <ul>
                            <li>
                                <svg aria-hidden="true" viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8931 18.5706C22.8931 18.5706 22.7182 19.3898 23.4834 19.4576C23.8703 19.4698 24.2816 19.4698 24.7139 19.4698C27.4727 19.4698 29.9964 18.4677 30.053 16.0061C30.105 13.8244 28.1409 13.1668 25.7742 13.1668H24.1042L22.8931 18.5706ZM35.4095 16.1264C35.4095 19.3913 32.6364 23.6987 23.0455 23.1686C21.9215 23.1059 21.2308 23.0141 20.2169 22.7679C16.6043 21.8891 17.8751 17.676 17.8751 17.676L21.5509 1.37271C23.5736 1.04699 25.842 0.849202 28.172 0.849202C33.3016 0.849202 36.7006 2.6583 36.7006 6.04406C36.7006 9.21419 33.6049 10.9371 31.2616 11.3276C33.1186 11.4647 35.4095 12.8813 35.4095 16.1264ZM26.0311 4.63511L25.1039 8.83544C25.1039 8.83544 24.8734 9.73464 25.659 9.73464H26.7407C29.5234 9.73464 31.4507 8.65703 31.4992 6.75873C31.5384 5.19278 30.1743 4.5143 28.2373 4.5143C27.3518 4.5143 26.4221 4.57394 26.0311 4.63511ZM58.8611 23.2274H55.8163L60.6442 1.49373C62.6409 1.03241 64.7426 0.941161 67.1766 0.961551C73.1178 0.985 75.8413 3.23146 75.8413 7.14736C75.8413 10.7355 72.9837 16.015 64.7665 16.015C63.9249 16.015 63.2011 15.9196 62.6786 15.885C62.6786 15.885 62.0093 18.9068 61.6112 20.6873C61.1096 22.9226 59.64 23.2274 58.8611 23.2274ZM65.4659 4.79334L64.1237 10.8532C64.1237 10.8532 63.691 12.1414 65.236 12.1414C65.4266 12.1495 65.6336 12.1551 65.8615 12.1551C69.3155 12.1286 71.0895 9.87605 71.0895 7.54394C71.0895 5.24956 69.5041 4.68527 67.5956 4.68527C66.621 4.68527 65.8895 4.73115 65.4659 4.79334ZM43.7638 13.6254C43.7638 17.056 45.7564 19.2495 49.1748 19.2495C50.5822 19.2495 52.1202 19.0135 54.1943 17.4924L53.3813 21.1462C53.3813 21.1462 53.1555 22.3584 51.8082 22.8294C50.7138 23.2398 49.5592 23.4264 47.8092 23.4264C42.9345 23.4264 38.1775 21.0265 38.1775 13.9155C38.1775 7.26373 42.44 0.50293 50.6684 0.50293C52.2828 0.50293 53.4241 0.730278 54.8855 1.2018C57.1391 1.9287 57.4129 3.14904 57.2635 3.88053C57.1111 4.62935 56.5794 6.42877 56.5794 6.42877C55.1618 5.16255 52.6926 4.80623 51.3199 4.80623C46.0603 4.80623 43.7638 10.0877 43.7638 13.6254ZM9.01081 10.7857C7.17164 8.79161 5.23153 7.58605 3.79913 6.89891C3.79913 6.89891 3.10129 6.55279 2.73682 6.35399C3.26798 5.16015 3.96684 4.30734 3.96684 4.30734C4.06573 4.17838 6.18272 1.6908 8.04484 2.56451C10.0787 3.47951 10.2857 7.67933 9.01081 10.7857ZM84.5695 10.7857C82.7303 8.79161 80.7902 7.58605 79.3578 6.89891C79.3578 6.89891 78.66 6.55279 78.2955 6.35399C78.8267 5.16015 79.5256 4.30734 79.5256 4.30734C79.6244 4.17838 81.7414 1.6908 83.6035 2.56451C85.6374 3.47951 85.8444 7.67933 84.5695 10.7857Z" fill="#002A8D"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3212 13.9614C13.3383 17.1285 7.92886 20.7385 6.39605 21.2799C3.41503 22.5273 1.39693 20.214 1.22464 19.9714C0.668503 19.2552 0.533419 19.1038 0.264272 18.5813C0.211768 18.6679 5.98672 15.9816 8.05579 12.5061C10.2966 9.521 10.4919 3.66551 8.04458 2.56445C8.78473 2.93708 10.5286 3.93823 12.1022 5.34055C13.6722 6.6715 15.0292 8.41688 15.0001 8.39446C15.1658 8.61926 17.1324 11.0671 15.3212 13.9614ZM90.5588 8.39446C90.7245 8.61926 92.6911 11.0671 90.88 13.9614C88.8975 17.1285 83.4876 20.7385 81.9548 21.2799C78.9737 22.5273 76.9557 20.214 76.7834 19.9714C76.2272 19.2552 76.0921 19.1038 75.823 18.5813C75.7705 18.6679 81.5459 15.9816 83.6145 12.5061C85.8554 9.521 86.0506 3.66551 83.6033 2.56445C84.3434 2.93708 86.0873 3.93823 87.6609 5.34055C89.2309 6.6715 90.5884 8.41688 90.5588 8.39446Z" fill="#FF7800"></path>
                                </svg>
                            </li>
                            <li>
                                <svg viewBox="0 0 153 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M145.8 15.6l-.1-.1v-.1c1.6-2 5-5.7 6.3-6.9h-2c-1.2 0-2 .2-3 1-1.8 1.6-3.2 3.6-4.7 5.5l-.3.4v-11h-3.6v19.1h3.6v-7.7l.3.3c1.7 2.3 3.4 4.5 5.4 6.6.6.6 1.6 1 2.4 1 1 0 1.6-.3 2-.7l-6.3-7.4zM74.6 8.2c-4.3 0-7.4 3.1-7.4 8.2 0 4.6 3.7 7.4 7.5 7.4 2.2 0 3.6-.3 4.4-1v-2.5c-1.1.5-2.5.7-3.7.7-2.3 0-4.2-1.2-4.5-3.3v-.2h2.7c2.5 0 4.3-.2 5.5-.7 1.1-.6 1.6-1.5 1.6-2.8 0-3.6-2.9-5.8-6-5.8zm1.8 6.6c-.7.3-1.8.4-3.7.4h-1.9v-.7c.2-1.9 1.5-3.4 3.5-3.4 1 0 1.7.2 2.2.6.6.4.9 1 .9 1.8 0 .6-.3 1-1 1.3zm6.2-.8v9.6h3.6v-8.9c0-1.2.2-2 .7-2.6.5-.6 1.2-.8 2.1-.8h1V8.6a4 4 0 00-1.8-.3c-4 0-5.6 2.8-5.6 5.8zm-47 9.6H39V4.3h-3.6v19.3zM48.6 8.2c-4.7 0-6.8 3.2-6.8 6.4v9h3.5v-8.7c0-1.2.3-2 .8-2.7.6-.6 1.3-1 2.2-1 1 0 1.9.3 2.5 1 .5.6.8 1.6.8 3v8.4h3.6v-8.8c0-4.3-3-6.6-6.6-6.6zm12.9-3.9H58v14c0 3.4 1.8 5.5 5.7 5.5 1.6 0 2.6-.5 3-1.3v-2.2c-.6.2-1.5.4-2.5.4-.8 0-1.5-.2-2-.7-.4-.5-.6-1.2-.6-2.2v-6.5h3c1.6 0 2.2-1 2.2-1.7V8.2h-5.2V4.3zM129 8.2c-4.8 0-6.9 3.2-6.9 6.4v9h3.6v-8.7c0-1.2.3-2 .8-2.7.5-.6 1.3-1 2.2-1 1 0 1.8.3 2.4 1 .6.6.9 1.6.9 3v8.4h3.5v-8.8c0-4.3-3-6.6-6.5-6.6zm-29.6 0c-2 0-3.3 1.2-4 2.2l-.3.5V4.3h-3.6v12c0 5 3.1 7.5 7.1 7.5 4.6 0 7.4-3.5 7.4-8s-2.9-7.6-6.6-7.6zM99 20.8c-1.2 0-2.2-.3-2.9-1.1-.7-.9-1-2.2-1-4 0-2.4 1.5-4.4 3.5-4.4 1.2 0 2.2.3 2.8 1.1.7.8 1 2.1 1 4 0 2.5-1.4 4.4-3.4 4.4zm14.3-12.6c-2.1 0-3.5.6-4.5 1.3V12a9 9 0 014-.9c1.1 0 2.1.2 2.7.7.6.4 1 1.2 1 2.3v.4H115c-5.7 0-7.6 2-7.6 4.6 0 2.7 2.4 4.7 6 4.7h.9c3.4 0 5.7-2.1 5.7-5.3V15c0-5.4-3.1-6.8-6.6-6.8zm3.1 10.3c0 .8-.2 1.5-.6 2-.5.3-1.1.5-2 .5-.9 0-1.6-.1-2-.5-.6-.3-.9-.9-.8-1.5 0-.7.2-1.2.8-1.6.6-.3 1.6-.5 3.1-.5h1.5v1.6z" fill="#05BE50"></path>
                                    <path id="brand-text" fill-rule="evenodd" clip-rule="evenodd" d="M3.8 0C1.8 0 0 1.9 0 3.9v24.3h24c2.1 0 3.8-1.7 3.8-3.8V.1H3.8zm17.6 20.3L6.6 23V8l14.8-2.8v15z" fill="#0039A6"></path>
                                </svg>
                            </li>
                            <li><img src="//scotiabankfiles.azureedge.net/scotiabank-peru/Global-Rebrand/logo.svg" alt="Scotiabank Logo" data-dsk-src="//scotiabankfiles.azureedge.net/scotiabank-peru/Global-Rebrand/logo.svg" data-dsk-alt="Scotiabank Logo" data-mbl-src="//scotiabankfiles.azureedge.net/scotiabank-peru/Global-Rebrand/logo-mobile.svg" data-mbl-alt="logo Scotiabank" /></li>
                            <li><img src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png" alt="logo de Visa" /></li>
                            <li><img src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="logo de paypal" /></li>
                            <li><img src="https://www.yape.com.pe/assets/images/logo.png" alt="logo de yape" /></li>
                            <li><img src="https://plin.pe/wp-content/themes/plin/imgs/logo.png" alt="logo de plin" /> </li>
                        </ul>
                    </section>

                    <section className="empresa_registrada">
                        <h1>Empresa registrada</h1>
                        <ul>
                            <li><img src="../../../assets/logosInstituciones/logoSunat.png" alt="Logotipo de SunatGGGGG" /></li>
                            <li><img src="../../assets/logosInstituciones/logoCamaraDeComercioDark2.png" className="logoCamaraDeComercioDeLima" alt="Logotipo de la Cámara de Comercio de Lima" /></li>
                            <li><img src="../../assets/logosInstituciones/logoLargoArtesaniasDelPeru.png" alt="Logotipo de Artesanías del Perú" /></li>
                            <li><img src="../../assets/logosInstituciones/logoRegistroNacionalDeArtesanos.jpg" alt="Logotipo de Registro Nacional de Artesanos" /></li>
                            <li><img src="../../assets/logosInstituciones/logoPromPeru.png" alt="Logotipo de Prom Perú" /></li>
                            <li><img className="logoMarcaPeru" src="../../assets/logosInstituciones/logo-peru-transparente.png" alt="Logotipo de Marca Perú" /></li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
            {/* <script src="../js/contact.js"></script> */}
        </>
    );
}
