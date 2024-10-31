export const renderFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
        <footer class="footer">
            <div class="container footer-container">
                <!-- Información adicional -->
                <div class="footer-section">
                    <h4>Explora Más</h4>
                    <ul>
                        <li><a href="#">Nuevos Lanzamientos</a></li>
                        <li><a href="#">Categorías de Libros</a></li>
                        <li><a href="#">Escritores Destacados</a></li>
                    </ul>
                </div>
        
                <!-- Redes Sociales -->
                <div class="footer-section">
                    <h4>Síguenos</h4>
                    <div class="social-icons">
                        <a href="#">
                            <img src="img/icons/facebook.png" alt="Facebook" class="normal-icon" />
                            <img src="img/icons/facebook-hover.png" alt="Facebook" class="hover-icon" />
                        </a>
                        <a href="#">
                            <img src="img/icons/twitter.png" alt="Twitter" class="normal-icon" />
                            <img src="img/icons/twitter-hover.png" alt="Twitter" class="hover-icon" />
                        </a>
                        <a href="#">
                            <img src="img/icons/instagram.png" alt="Instagram" class="normal-icon" />
                            <img src="img/icons/instagram-hover.png" alt="Instagram" class="hover-icon" />
                        </a>
                    </div>
                </div>

                <!-- Derechos de autor y enlaces legales -->
                <div class="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Términos de Servicio</a></li>
                    </ul>
                </div>
            </div>
        
            <!-- Derechos de autor y créditos -->
            <div class="footer-credits">
                <p>&copy; BookCluster. Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
    return footer;
}