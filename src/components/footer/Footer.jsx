import './Footer.scss'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer_principal">
                        <section className="resumen">
                            <a href="/" title="BMK Joyas Perú S.A.C." rel="home">
                                <img src="/assets/logo-jmk-joyas-transparente.jpeg" alt="logotipo de BMK Joyas Perú S.A.C."/>
                            </a>
                            <p>Establecer y desarrollar negocios a largo plazo con usted, nuestro cliente, mediante la comprensión y el cumplimiento de sus necesidades de joyería de alta calidad a precios competitivos, al mismo tiempo que le brindamos un servicio al cliente puntual, eficaz y responsable.</p>
                        </section>

                        <section className="enlaces">
                            <h3>Enlaces</h3>
                            <ul>
                                <li><a className="no-subrayado" href="/">Inicio</a></li>
                                <li><a className="no-subrayado" href="/marketplace" target="_blank">Tienda</a></li>
                                <li><a className="no-subrayado" href="/about" target="_blank">Nosotros</a></li>
                                <li><a className="no-subrayado" href="/questions" target="_blank">¿Cómo comprar?</a></li>
                                <li><a className="no-subrayado" href="/questions" target="_blank">Preguntas Frecuentes</a></li>
                                <li><a className="no-subrayado" href="/contact" target="_blank">Contacto</a></li>
                            </ul>
                        </section>

                        <section className="contactanos">
                            <h3>Contáctanos</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/BmkJoyasPeru/" target="_blank"><img src="/assets/svg icons/icons-facebook-blanco-cuadrado.svg" alt="logoFacebook"/></a></li>
                                <li><a href="https://www.facebook.com/BmkJoyasPeru/" target="_blank"><img src="/assets/svg icons/icons-instagram-blanco.svg" alt="logoInstagram"/></a></li>
                                <li><a href="https://wa.pe/913010384" target="_blank"><img src="/assets/svg icons/icons-redes-sociales-blanco-completos/whatsapp-blanco.svg" alt="logoWhatsapp"/></a></li>
                                <li><a href="https://www.facebook.com/BmkJoyasPeru/" target="_blank"><img src="/assets/svg icons/icons-messenger-blanco.svg" alt="logoMessenger"/></a></li>
                                <li><a href="https://www.tiktok.com/@bmkjoyasplata950" target="_blank"><img src="/assets/svg icons/icons-tik-tok-blanco.svg" alt="logoTikTok"/></a></li>
                            </ul>
                        </section>
                    </div>

                    <section className="footer_secundario">
                        <p>&copy; 2023 JMK Joyas S.A.C. Todos los derechos Reservados</p>
                    </section>
                </div>
            </footer>
        </>
    )
}