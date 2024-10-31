import { renderHeader } from "../components/header";
import { renderHero } from "../components/hero";
import { renderFeatures } from "../components/features";
import { renderAdvantages } from "../components/advantages";
import { renderCta } from "../components/cta";
import { renderFooter } from "../components/footer";

/**
 * 
 * @param {HTMLElement} element 
 */
export const renderHomePage = (element) => {
    const header = renderHeader();
    const hero = renderHero();
    const features = renderFeatures();
    const advantages = renderAdvantages();
    const cta = renderCta();
    const footer = renderFooter();

    element.innerHTML = ''; //limpiar elemento
    element.appendChild(header);
    element.appendChild(hero);
    element.appendChild(features);
    element.appendChild(advantages);
    element.appendChild(cta);
    element.appendChild(footer);
}