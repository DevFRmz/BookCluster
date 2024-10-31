import { renderHomePage } from "./pages/home";
import { renderExplorePage } from "./pages/explore";

export const navigateTo = (path) => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    switch(path){
        case '/':
            renderHomePage(app);
            break;
        case '/explore':
            renderExplorePage(app);
            break;
        default: 
            app.innerHTML = '<h2>404, page not found</h2>';
    }
}