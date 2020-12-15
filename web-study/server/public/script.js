const button = document.querySelector('button');
const input = document.querySelector('.comment');
const comment_box = document.querySelector('.comment-container');
console.log(comment_box)
button.addEventListener('click', () => {
    const comment = document.createElement('div');
    comment.setAttribute('class', 'comment-box');
    comment.innerText = input.value;

    comment_box.appendChild(comment);

    input.value = '';

});