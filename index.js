window.addEventListener('DOMContentLoaded', (e) => {
    //#region Tooltips
    tippy.setDefaultProps({
        delay: 50,
        animation: 'scale',
        duration: 500,
        placement: 'bottom',
        theme: 'customized',
    });
    tippy('#logo_c', {
        content: 'C programming language',
    });
    tippy("#logo_jscript", {
        content: "Javascript"
    });
    tippy("#logo_nodejs", {
        content: "Nodejs",
    });
    tippy("#logo_css3", {
        content: "CSS3",
    });
    tippy("#logo_git", {
        content: "Git Version Control",
    });
    tippy("#logo_html5", {
        content: "HTML5",
    });
    tippy("#logo_photoshop", {
        content: "Adobe Photoshop",
    });
    tippy("#logo_sqlite", {
        content: "SQLite",
    });
    tippy("#logo_vim", {
        content: "Vim",
    });
    //#endregion

    const navbar = document.querySelector('#navbar');
    let lastScrollY = 0;
    window.addEventListener('scroll', e => {
        let scrollY = window.scrollY;
        if (scrollY > lastScrollY) {
            navbar.style.top = '-10vh';
        } else {
            navbar.style.top = '0';
        }
        lastScrollY = scrollY;
    })
})