export const renderAdvantages = () => {
    const advantages = document.createElement('section');
    advantages.classList.add('advantages');
    advantages.innerHTML = `
        <div class='container'>
            <h2 class='advantages__title'>Ventajas del Sistema de Recomendación</h2>

            <div class='advantages__container'>
                <div class='advantages__content'>
                    <p class='advantages__text'>BookCluster utiliza un algoritmo de Collaborative Filtering para personalizar las recomendaciones de libros, adaptándose a los gustos y preferencias de cada usuario. A continuación, algunas ventajas:</p>
                    
                    <ul>
                        <li>Recomendaciones personalizadas basadas en tu historial de lectura.</li>
                        <li>Conexiones con otros usuarios con intereses similares.</li>
                        <li>Mejoras constantes en las recomendaciones a medida que se agregan nuevos libros y reseñas.</li>
                        <li>Facilidad para descubrir nuevos autores y géneros.</li>
                    </ul>
                </div>
                <div class='advantages__image'>
                    <img src='/img/advantages2.png' alt='Ventajas del Sistema de Recomendación'>
                </div>
            </div>
        </div>
    `;
    return advantages;
}