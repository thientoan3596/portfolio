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
            navbar.style.top = '-'+navbar.clientHeight + 'px' 
        } else {
            navbar.style.top = '0';
        }
        lastScrollY = scrollY;
    });
    document.querySelectorAll('.project_img').forEach(elmnt => {
        elmnt.addEventListener('mouseover', e => {
            elmnt.parentElement.querySelector('.description').style.zIndex = "-1";
        });
        elmnt.addEventListener('mouseout', e => {
            elmnt.parentElement.querySelector('.description').style.zIndex = "1";
        })
    });
    document.querySelector('.menu_burger_container').addEventListener('click', e => {
        document.querySelector('.menu_burger_container').classList.toggle('open');
        document.querySelector('.navbar_menu').classList.toggle('active');
    });
    document.querySelector('#about_link a').addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector('#about').scrollIntoView();
    });
    document.querySelector('#experience_link a').addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector('#experience').scrollIntoView();
    });
    

})