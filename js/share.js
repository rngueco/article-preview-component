var share_button = document.querySelectorAll('.article-card__share');
for (var btn of share_button) {
    btn.addEventListener('click', toggleShareOptions);
}

function toggleShareOptions() {
    var share_options = document.querySelector('.share-options');
    var article_button = document.querySelector('.article-card__share');
    share_options.classList.toggle('hidden');
    article_button.classList.toggle('dark-button');
}