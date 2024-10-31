const imgBooks = [];
for(let i = 1; i <= 10; i++) {
    imgBooks.push(`/img/books/book${i}.jpg`);
}
export const renderRecommendedBooks = () => {
    const recommendedBooks = document.createElement('section');
    recommendedBooks.classList.add('recommended-books');
    recommendedBooks.innerHTML = `
        <div class='container'>
            <h2>Libros Recomendados</h2>
            <div class='recommended-books__grid'>
                <div class='recommended-books__book'>
                    <a href='#'>
                        <h3>El Poder del Ahora</h3>
                        <img src='${imgBooks[0]}' alt='Book 1'>
                        <p>Eckhart Tolle</p>
                    </a>
                </div>
                <div class='recommended-books__book'>
                    <a href='#'>
                        <h3>El Alquimista</h3>
                        <img src='${imgBooks[1]}' alt='Book 2'>
                        <p>Paulo Coelho</p>
                    </a>
                </div>
                <div class='recommended-books__book'>
                    <a href='#'>
                        <h3>La Sombra del Viento</h3>
                        <img src='${imgBooks[2]}' alt='Book 3'>
                        <p>Carlos Ruiz Zafón</p>
                    </a>
                </div>
                <div class='recommended-books__book'>
                    <a href='#'>
                        <h3>El Poder del Ahora</h3>
                        <img src='${imgBooks[0]}' alt='Book 1'>
                        <p>Eckhart Tolle</p>
                    </a>
                </div>
                <div class='recommended-books__book'>
                    <a href='#'>
                        <h3>El Alquimista</h3>
                        <img src='${imgBooks[1]}' alt='Book 2'>
                        <p>Paulo Coelho</p>
                    </a>
                </div>
                <div class='recommended-books__book'>
                    <a href='#'>
                        <h3>La Sombra del Viento</h3>
                        <img src='${imgBooks[2]}' alt='Book 3'>
                        <p>Carlos Ruiz Zafón</p>
                    </a>
                </div>
            </div>
        </div>
    `;
    return recommendedBooks;
}