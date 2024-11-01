import { renderHeader } from "../components/header"
import { renderRecommendedBooks } from "../components/recommendedBooks";
import { renderSearch } from "../components/search";
import { fetchRecommendedBooks } from "../functions/fetchRecommendedBooks";

export const renderExplorePage = (element) => {    
    const header = renderHeader();
    const search = renderSearch();
    const recommendedBooks = renderRecommendedBooks();

    element.innerHTML = '';
    element.appendChild(header);
    element.appendChild(search);
    element.appendChild(recommendedBooks);

    const bookName = document.querySelector('.input-books');

    // Evento para llamar a la función de recomendaciones
    document.querySelector('.btn-search').addEventListener('click', () => {
        fetchRecommendedBooks(bookName.value);
    });
}