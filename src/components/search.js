export const renderSearch = () => {
    const search = document.createElement('div');
    search.classList.add('search');
    search.innerHTML = `
        <div class="search-panels">
            <div class="search-group">
                <input required="" type="text" name="text" autocomplete="on" class="input input-books">
                <label class="enter-label">Busca un libro...</label>
                <div class="btn-box">
                    <button class="btn-search">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path><circle id="svg-circle" cx="208" cy="208" r="144"></circle></svg>
                    </button>
                </div>
                <div class="btn-box-x">
                    <button class="btn-cleare">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" id="cleare-line"></path></svg>
                    </button>
                </div>
                <ul class="suggestions-list" style="list-style: none; padding: 0; margin-top: 5px;"></ul>
            </div>
        </div>
    `;

    const inputField = search.querySelector('.input-books');
    const suggestionsList = search.querySelector('.suggestions-list');

    inputField.addEventListener('input', async () => {
        const query = inputField.value;
        if (query.length < 1) {
            suggestionsList.innerHTML = ''; // Limpiar las sugerencias si no hay texto
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/suggestions?query=${encodeURIComponent(query)}`);
            const suggestions = await response.json();

            suggestionsList.innerHTML = ''; // Limpiar las sugerencias previas

            suggestions.forEach(title => {
                const li = document.createElement('li');
                li.textContent = title;
                li.addEventListener('click', () => {
                    inputField.value = title; // Completar el input con la sugerencia seleccionada
                    suggestionsList.innerHTML = ''; // Limpiar las sugerencias después de seleccionar
                });
                suggestionsList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al obtener sugerencias:', error);
        }
    });

    return search;
}
