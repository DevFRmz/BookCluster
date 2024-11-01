import { renderRecommendedBooks } from '../components/recommendedBooks';

// Función para obtener las recomendaciones de libros
export const fetchRecommendedBooks = async (bookName) => {
    try {
        const response = await fetch(`http://localhost:5000/recommend?book_name=${encodeURIComponent(bookName)}`);
        
        // Verificar si la respuesta es exitosa (status en el rango 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const recommendations = await response.json(); // Convertir la respuesta a JSON

        // Llamar a la función para renderizar los libros recomendados
        const booksSection = renderRecommendedBooks(recommendations);
        document.querySelector('.recommended-books').innerHTML = ''; // Limpiar contenido previo
        document.querySelector('.recommended-books').appendChild(booksSection);
    } catch (error) {
        console.error('Error al obtener recomendaciones:', error);
        document.querySelector('.recommended-books').innerHTML = '<p>Error al obtener recomendaciones.</p>';
    }
};
