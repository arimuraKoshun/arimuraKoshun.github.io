const SITE = {
    github: 'https://github.com/arimuraKoshun',
    email: 'arimurakoshun523@mail.kyutech.jp',
    linkedin: 'https://www.linkedin.com/in/koshun-arimura-7a92a1381/',
};

const page = document.body.dataset.page || 'about';
const links = [
    { id: 'about', label: 'About', href: 'index.html#about' },
    { id: 'publications', label: 'Publications', href: 'publications.html' },
    { id: 'awards', label: 'Awards', href: 'awards.html' },
    { id: 'cv', label: 'CV', href: 'index.html#cv' },
    { id: 'contact', label: 'Contact', href: 'index.html#contact' },
];

const icons = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.13c-3.1.68-3.75-1.32-3.75-1.32-.5-1.27-1.23-1.6-1.23-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.8 2.14 3.46 1.52.1-.72.39-1.22.7-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.21 1.15-3-.11-.28-.5-1.42.1-2.96 0 0 .94-.3 3.08 1.14a10.72 10.72 0 0 1 5.6 0c2.14-1.44 3.08-1.14 3.08-1.14.6 1.54.21 2.68.1 2.96.72.79 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.4.35.75 1.04.75 2.1v3.12c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2 9 6 9-6H3Zm18 10V9.4l-8.45 5.64a1 1 0 0 1-1.1 0L3 9.4V17h18Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM7.9 18.7H4.8V9.2h3.1v9.5ZM6.35 7.9a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM19.2 18.7h-3.1v-4.6c0-1.1 0-2.5-1.55-2.5-1.58 0-1.83 1.2-1.83 2.43v4.67H9.6V9.2h3v1.3h.04c.42-.8 1.45-1.55 2.97-1.55 3.18 0 3.59 2.1 3.59 4.82v4.93Z"/></svg>',
};

function renderSidebar() {
    const mount = document.getElementById('site-sidebar');
    if (!mount) return;
    const nav = links.map(({ id, label, href }) => {
        const current = id === page ? ' aria-current="page"' : '';
        return `<a href="${href}"${current}>${label}</a>`;
    }).join('');
    mount.innerHTML = `
        <aside class="site-sidebar">
            <nav class="sidebar-nav" aria-label="Primary navigation">${nav}</nav>
            <div class="social-links" aria-label="Social links">
                <a class="social-link" href="${SITE.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icons.github}</a>
                <a class="social-link" href="mailto:${SITE.email}" aria-label="Email">${icons.email}</a>
                <a class="social-link" href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icons.linkedin}</a>
            </div>
        </aside>`;
}

function renderFooter() {
    const mount = document.getElementById('site-footer');
    if (!mount) return;
    mount.innerHTML = `<div class="content footer-content"><span>© 2026 Koshun Arimura</span><span>Set in Playfair Display &amp; Inter</span></div>`;
}

renderSidebar();
renderFooter();
