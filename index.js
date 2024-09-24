(() => {
    window.onload = () => {
        let header__burger = document.querySelector('.header__burger');
        let header__menu = document.querySelector('.header__menu');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e)=> {
            header__burger.classList.toggle('active');
            header__menu.classList.toggle('active');
            body.classList.toggle('lock');
        });

        const links = document.querySelectorAll(".header__link");
        links.forEach(e=>{
            e.addEventListener("click",t=>{
            t.preventDefault();
            let o=document.querySelector(e.getAttribute("href"));
            window.scrollTo({top:o.offsetTop,behavior:"smooth"})
            header__burger.classList.remove('active');
            header__menu.classList.remove('active');
            body.classList.remove('lock');
            });
        });
    }
})();
