import { renderHeader } from "../components/header"
import { renderRecommendedBooks } from "../components/recommendedBooks";
import { renderSearch } from "../components/search";

export const renderExplorePage = (element) => {
    const header = renderHeader();
    const search = renderSearch();
    const recommendedBooks = renderRecommendedBooks();

    element.innerHTML = '';
    element.appendChild(header);
    element.appendChild(search);
    element.appendChild(recommendedBooks);
}