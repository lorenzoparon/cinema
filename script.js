const filtri = document.querySelectorAll('.filtro');
const movies = document.querySelectorAll('.film-card');

filtri.forEach(filtro => {
    filtro.addEventListener('click', () => {
        const selected = filtro.dataset.filtro;

        filtri.forEach(button => button.classList.remove('active'));
        filtro.classList.add('active');

        movies.forEach(film => {
            const visible = selected === 'all' || film.dataset.genre === selected;
            film.style.display = visible ? '' : 'none';
        });
    });
});

const banner = document.querySelector('#privacy-banner');
const accept = document.querySelector('#privacy-accept');

const navigation = performance.getEntriesByType('navigation')[0];

if (navigation && navigation.type === 'reload') {
    sessionStorage.removeItem('privacyAccepted');
}

if (sessionStorage.getItem('privacyAccepted') === 'true') {
    banner.style.display = 'none';
} else {
    banner.style.display = 'flex';
}

accept.addEventListener('click', () => {
    banner.style.display = 'none';
    sessionStorage.setItem('privacyAccepted', 'true');
});