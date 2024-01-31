// recupère le menu
let menu = document.getElementById('menu');

// ajouter un évènement au click
menu.addEventListener('click', () => {
    // faire apparaitre le menu
    menu.classList.toggle('close')
})