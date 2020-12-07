window.onload = function () {
    buttons = document.querySelectorAll(".menuTexte");
    for (i = 0; i < buttons.length; i++) {
        element = buttons[i];
        element.addEventListener('click', (el) => {
            el = el.target
            stampChoice = el.dataset.choice
            if (stampChoice == 'common'){
                console.log('fdsf')
            }


        });
    }
};
