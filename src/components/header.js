

export const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <div class='logo-header'>
            <img src='/public/logo.png' >
            <h1>BookCluster</h1>
        </div>

        <nav class='nav-header'>
            <a href='#'>Nosotros</a>
            <a href='#'>Contacto</a>
            <a href='#'>Acceder</a>
        </nav>
    `;
    return header;
}