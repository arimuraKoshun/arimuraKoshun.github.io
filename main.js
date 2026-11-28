const SITE = {
    github: 'https://github.com/arimuraKoshun',
    email: 'arimurakoshun523@mail.kyutech.jp',
    linkedin: 'https://www.linkedin.com/in/koshun-arimura-7a92a1381/',
};

const page = document.body.dataset.page || 'about';
const isJapanese = location.pathname.startsWith('/ja/');
const pageFiles = { about: 'index.html', publications: 'publications.html', awards: 'awards.html' };
const links = [
    { id: 'about', labels: ['About', 'プロフィール'], href: 'index.html#about' },
    { id: 'publications', labels: ['Publications', '業績'], href: 'publications.html' },
    { id: 'awards', labels: ['Awards', '受賞歴'], href: 'awards.html' },
    { id: 'cv', label: 'CV', href: 'https://drive.google.com/file/d/1xxpqyVTEw8NTMN-69hKBbmtLLa6-XXoB/view?usp=sharing', external: true },
    { id: 'contact', labels: ['Contact', '連絡先'], href: 'index.html#contact' },
];

const icons = {
    github: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2 9 6 9-6H3Zm18 10V9.4l-8.45 5.64a1 1 0 0 1-1.1 0L3 9.4V17h18Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM7.9 18.7H4.8V9.2h3.1v9.5ZM6.35 7.9a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM19.2 18.7h-3.1v-4.6c0-1.1 0-2.5-1.55-2.5-1.58 0-1.83 1.2-1.83 2.43v4.67H9.6V9.2h3v1.3h.04c.42-.8 1.45-1.55 2.97-1.55 3.18 0 3.59 2.1 3.59 4.82v4.93Z"/></svg>',
};

function renderSidebar() {
    const mount = document.getElementById('site-sidebar');
    if (!mount) return;
    const nav = links.map(({ id, label, href, external }) => {
        const current = id === page ? ' aria-current="page"' : '';
        const target = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        const localizedHref = external ? href : `${isJapanese ? '/ja/' : '/'}${pageFiles[id] || href}${id === 'about' ? '#about' : ''}`;
        const localizedLabel = label || links.find((item) => item.id === id).labels[0];
        return `<a href="${localizedHref}"${current}${target}>${localizedLabel}</a>`;
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
    mount.innerHTML = `<div class="content footer-content"><span>© 2026 Koshun Arimura</span></div>`;
}

renderSidebar();
renderFooter();
