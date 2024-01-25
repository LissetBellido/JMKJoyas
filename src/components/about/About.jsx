import Footer from '../footer/Footer'
import Header from '../header/Header'
import './about.scss'
import '../marketplace/grid.scss'

export default function About() {
    return (
        <>
            <Header />
            <main className="container-bmk">
                <h3 className="centrar-texto h3-about">Sobre Nosotros</h3>

                <div className="sobre-nosotros rowCustomizable">
                    <div className="sobre-nosotros__imagen col-xs-12 col-s-12 col-m-12 col-l-6">
                        <img src="/assets/nosotrosFinal.png" className="fluid-imagen" alt="imagen nosotros" />
                    </div>

                    <div className="sobre-nosotros__texto col-xs-12 col-s-12 col-m-12 col-l-6">
                        <p>JMK Joyas es una empresa dedicada al diseño y fabricación de joyería en plata esterlina. Nuestra oficina y fábrica está ubicada en Lima - Perú.</p>

                        <p>Contamos con más de 10 años de experiencia en el rubro de joyería, además de ser la segunda generación familiar dedicada a este noble oficio de transformar el metal en hermosas joyas. Tenemos amplia experiencia en el mercado nacional y ahora incursionamos en el mercado global. </p>

                        <p>La industria de la joyería está impulsada por los cambios constantes de gustos y nuevas tendencias, y en JMK Joyas lo entendemos, por ello diseñamos nuestras propias joyas y contamos con un flujo constante de nuevas ideas que nos permiten a nosotros y a nuestros clientes estar a la vanguardia. Nos enorgullecemos de nuestros diseños originales e innovadores.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}