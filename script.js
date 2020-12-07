

window.onload = function () {
    buttons = document.querySelectorAll('.menuTexte');  /* Boutton pour les timbres */
    for (i = 0; i < buttons.length; i++) {
        element = buttons[i];
        element.addEventListener('click', (el) => {
            el = el.target
            stampChoice = el.dataset.choice
            console.log(el)
            let commonImage = document.querySelector('.commonImage').value;
            let rareImage = document.querySelector('.rareImage').value;
            let uniqueImage = document.querySelector('.uniqueImage').value;

            if (stampChoice == 'common'){
                document.querySelector('.commonImage').style.display = 'flex';
                document.querySelector('.rareImage').style.display = 'none';
                document.querySelector('.uniqueImage').style.display = 'none';
            }
            else if (stampChoice == 'rare'){
                document.querySelector('.commonImage').style.display = 'none';
                document.querySelector('.rareImage').style.display = 'flex';
                document.querySelector('.uniqueImage').style.display = 'none';
            }
            else if (stampChoice == 'unique'){
                document.querySelector('.commonImage').style.display = 'none';
                document.querySelector('.rareImage').style.display = 'none';
                document.querySelector('.uniqueImage').style.display = 'flex';
            }

        });
    }
};
