export const renderCta = () => {
    const cta = document.createElement('section');
    cta.classList.add('cta');
    cta.innerHTML = `
        <div class='container cta__container'>
            <div class='cta__image'>
                <img src='/img/cta.png' alt='CTA'>
            </div>
            <div class='cta__content'>
                <h2>¿Listo para encontrar tu próxima lectura?</h2>
                <p>Únete a BookCluster hoy y empieza a descubrir libros.</p>
                
                <button class="animated-button" data-route="signup">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span class="text">Registrarse</span>
                    <span class="circle"></span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    return cta;
}