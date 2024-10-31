const imgFeatures = [];
for(let i = 1; i <= 3; i++) {
    imgFeatures.push(`/img/features/feature${i}.png`);
}

export const renderFeatures = () => {
    const features = document.createElement('section');
    features.classList.add('features');
    features.innerHTML = `
        <div class='container'>
            <h2>¿Por qué BookCluster?</h2>

            <div class='grid'>
                <div class='feature'>
                    <img src='${imgFeatures[0]}' alt='Feature 1'>
                    <h3>Recomendaciones Inteligentes</h3>
                    <p>Recibe sugerencias de libros basadas en tus preferencias y reseñas.</p>
                </div>
                
                <div class='feature'>
                    <img src='${imgFeatures[1]}' alt='Feature 2'>
                    <h3>Intercambia</h3>
                    <p>Intercambia tus libros con otros lectores y expande tu biblioteca.</p>
                </div>
                
                <div class='feature'>
                    <img src='${imgFeatures[2]}' alt='Feature 3'>
                    <h3>Conéctate</h3>
                    <p>Conéctate con otros lectores y comparte tus opiniones y recomendaciones.</p>
                </div>
            </div>
        </div>
    `;
    return features;
}