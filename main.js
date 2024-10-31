import './src/scss/style.scss';
import { navigateTo } from './src/router';

// Navegación inicial (carga de la primera página)
navigateTo(window.location.pathname);//pathname muestra la ruta que esta en el enlace despues del " / "

document.addEventListener('click', event => {
    //para los enlaces de la pagina
    if(event.target.matches('[data-link]')) {
        event.preventDefault(); //prevenir el refresh de la pagina
        const path = event.target.getAttribute('href');
        history.pushState(null, null, path);// Cambia la URL a "/path" sin recargar la página
        navigateTo(path);
        return;
    }
    //para los botones de la pagina
    if(event.target.closest('button[data-route]')) {
        const path = event.target.closest('button').getAttribute('data-route');
        history.pushState(null, null, path);
        navigateTo(path);
    }
});

// Mantener la navegación en la misma página, popstate escucha el evento de los botones atras y adelante del navegador
window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname);
});