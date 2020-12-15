const button = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const GitLinkButton = document.querySelector('.gitLink');
const CloseButton = document.querySelector('.close-modal');

function GitLinkButtonClik() {
    window.open("https://github.com/peacemain-club/web-lecture/blob/master/class7/README.md");
}

function CloseButtonClick() {    
    modal.setAttribute('class', 'modal');
    button.style.opacity = 1;
}

button.addEventListener('click', () => {
    button.style.opacity = 0.3;
    modal.setAttribute('class', 'modal_clicked');

    GitLinkButton.addEventListener('click', GitLinkButtonClik);
    CloseButton.addEventListener('click', CloseButtonClick);
})
