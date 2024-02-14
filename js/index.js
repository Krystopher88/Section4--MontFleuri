document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector('.nav-mobile .fa-bars');
    const closeIcon = document.querySelector('.nav-mobile .fa-times');
    const menu = document.querySelector('.nav-mobile .header-expand');
    const body = document.querySelector('body');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('display-none');
        body.classList.toggle('blur');
    });

    closeIcon.addEventListener('click', function() {
        menu.classList.add('display-none');
        body.classList.remove('blur');
    });

    // Ajout d'un écouteur d'événements de clic au document
    document.addEventListener('click', function(event) {
        // Vérifier si l'élément cliqué n'est pas à l'intérieur du menu
        if (!menu.contains(event.target) && event.target !== burgerIcon) {
            menu.classList.add('display-none'); // Fermer le menu
            body.classList.remove('blur'); // Retirer le flou
        }
    });
});
