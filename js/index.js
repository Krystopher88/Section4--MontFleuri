document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector('.nav-mobile .fa-bars');
    const closeIcon = document.querySelector('.nav-mobile .fa-times');
    const menu = document.querySelector('.nav-mobile .header-expand');

    burgerIcon.addEventListener('click', function(event) {
        menu.classList.toggle('display-none');
        event.stopPropagation();
    });

    closeIcon.addEventListener('click', function() {
        menu.classList.add('display-none');
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== burgerIcon) {
            menu.classList.add('display-none');
        }
    });
});
