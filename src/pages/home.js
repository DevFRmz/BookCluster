import { renderHeader } from "../components/header";
/**
 * 
 * @param {HTMLElement} element 
 */
export const renderHomePage = (element) => {
    const header = renderHeader();

    const main = document.createElement('main');
    main.innerHTML = `

    `;

    element.innerHTML = ''; //limpiar elemento
    element.appendChild(header);
    element.appendChild(main);
}