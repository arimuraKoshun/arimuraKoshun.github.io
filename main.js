// ─────────────────────────────────────────────────────────────────
// Site config — edit here to update nav / masthead / footer across all pages.
// ─────────────────────────────────────────────────────────────────
const SITE = {
    logo: {
        name: 'Koshun Arimura',
        suffix: 'Personal'
    },
    footer: {
        copyright: '© 2026 Koshun Arimura · All Rights Reserved',
        colophon: 'Set in Cormorant Garamond &amp; DM Sans · Hosted on GitHub Pages'
    },
    // To add/remove/reorder nav items, edit this array.
    nav: [
        { id: 'publications', label: 'Publications', href: 'publications.html' },
        { id: 'awards',       label: 'Awards',       href: 'awards.html' }
    ]
};

// ─────────────────────────────────────────────────────────────────
// Current page is identified by <body data-page="..."> and
// <body data-masthead="..."> for the masthead middle text.
// ─────────────────────────────────────────────────────────────────
const currentPage = document.body.dataset.page || '';
const mastheadMiddle = document.body.dataset.masthead || SITE.masthead.middleDefault;

// ── Render NAV ──────────────────────────────────────────────────
function renderNav() {
    const el = document.getElementById('site-nav');
    if (!el) return;
    const links = SITE.nav.map(item => {
        const cls = item.id === currentPage ? ' class="current"' : '';
        return `<li><a href="${item.href}"${cls}>${item.label}</a></li>`;
    }).join('');
    el.innerHTML = `
        <a href="index.html" class="nav-logo">${SITE.logo.name}<span class="amp"> · </span><em>${SITE.logo.suffix}</em></a>
        <ul class="nav-links">${links}</ul>
    `;
}

// ── Render MASTHEAD ─────────────────────────────────────────────
function renderMasthead() {
    const el = document.getElementById('site-masthead');
    if (!el) return;
    el.innerHTML = `
        <span>${SITE.masthead.left}</span>
        <span class="issue">${mastheadMiddle}</span>
        <span>${SITE.masthead.right}</span>
    `;
}

// ── Render FOOTER ───────────────────────────────────────────────
function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
        <p>${SITE.footer.copyright}</p>
        <p class="colophon">${SITE.footer.colophon}</p>
    `;
}

// ── Behavior: nav background on scroll ──────────────────────────
function bindNavScroll() {
    const navEl = document.querySelector('nav');
    if (!navEl) return;
    window.addEventListener('scroll', () => {
        navEl.classList.toggle('scrolled', window.scrollY > 10);
    });
}

// ── Behavior: reveal sections on scroll ─────────────────────────
function bindSectionReveal() {
    const io = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        }),
        { threshold: 0.08 }
    );
    document.querySelectorAll('.section').forEach(s => io.observe(s));
}

// ── Init ────────────────────────────────────────────────────────
renderNav();
renderMasthead();
renderFooter();
bindNavScroll();
bindSectionReveal();
