const imgHero = '/img/hero.png';

export const renderHero = () => {
    const hero = document.createElement('section');
    hero.classList.add('hero');
    hero.innerHTML = `
        <div class='container container-hero'>
            <div>
                <p class='title-hero'>BookCluster</p>
                <h2 class='hero__main-phrase'><span>Encuentra</span> tu próxima gran lectura y <span>conéctate</span> con otros lectores.</h2>
                <p>Descubre, intercambia y comparte tus lecturas con BookCrossing</p>

                <button class="animated-button" data-route="signup">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span class="text">Unete Ahora!</span>
                    <span class="circle"></span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>
            </div>

            <div>
                <img src='${imgHero}' alt'Hero image'>
            </div>
        </div>
    `;
    return hero;
}