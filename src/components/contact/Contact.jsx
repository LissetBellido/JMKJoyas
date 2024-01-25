
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './contact.scss'
import '../marketplace/grid.scss'

export function Contact() {
    return (
        <>
            <Header />
            <main class="container-bmk contenedor-contact">
                <h3 class="centrar-texto contacto">Envíanos un mensaje</h3>
                <p class="parrafo-mensaje">Complete el siguiente formulario, escriba su pregunta o comentario y le responderemos lo antes posible.</p>

                <div class="contacto-bg"></div>

                <form class="formulario">
                    <div class="campo">
                        <label class="campo__label" for="nombre">Nombre</label>
                        <input class="campo__field" type="text" placeholder="Escribe tu nombre" id="nombre" />
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="email">E-mail</label>
                        <input
                            class="campo__field"
                            type="email"
                            placeholder="Escribe tu E-mail"
                            id="email"
                        />
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="whatsApp">WhatsApp</label>
                        <input
                            class="campo__field"
                            type="number"
                            placeholder="Escribe tu WhatsApp"
                            id="whatsApp"
                        />
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="mensaje">Mensaje</label>
                        <textarea
                            class="campo__field campo__field--textarea"
                            id="mensaje" placeholder="Escribe tu mensaje"
                        ></textarea>
                    </div>

                    <div class="campo">
                        <input type="submit" value="Enviar" class="boton boton--primario" />
                    </div>
                </form>


            </main>
            <Footer />
            <script src="../js/contact.js"></script>
        </>
    )
}