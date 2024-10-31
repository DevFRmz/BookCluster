export const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <div class="container-header container">
            <a href='/' class='logo-header'>
                <img src='/logo.png' >
                <h1>Book<span>Cluster</span></h1>
            </a>
            
            <nav class='nav-header'>
            <a href='explore'>Explorar Libros</a>
            <a href='#'>Acerca de</a>
            <a href='#'>Contacto</a>
            <a href='signup'>Acceder</a>
            </nav>
        </div>
    `;
    return header;
}