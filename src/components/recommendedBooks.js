//esto al usar imagenes locales
/* const imgBooks = [];
for(let i = 1; i <= 10; i++) {
    imgBooks.push(`/img/books/book${i}.jpg`);
} */


export const renderRecommendedBooks = (recommendedBooksData) => {
    const recommendedBooks = document.createElement('section');
    recommendedBooks.classList.add('recommended-books');
    recommendedBooks.innerHTML = `
        <div class='container'>
            <h2 class='recommended-books__title'>Selecciona un libro</h2>
            <div class='recommended-books__grid'></div>
        </div>
    `;

    const grid = recommendedBooks.querySelector('.recommended-books__grid');
    const title = recommendedBooks.querySelector('.recommended-books__title');

    // Verificar si hay datos de recomendaciones
    if (recommendedBooksData && recommendedBooksData.length > 0) {
        recommendedBooksData.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('recommended-books__book');
            bookElement.innerHTML = `
                <a href='#'>
                    <h3>${book.title}</h3>
                    <img src='${book.image_url}' alt='${book.title}'>
                    <p>${book.author}</p>
                </a>
            `;
            title.textContent = 'Libros recomendados';
            grid.appendChild(bookElement);
        });
    } else {
        // Mensaje si no hay recomendaciones
        grid.innerHTML = '<p>No hay libros recomendados disponibles.</p>';
    }

    return recommendedBooks;
}