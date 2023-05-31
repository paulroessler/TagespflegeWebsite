const revealButton = document.querySelector('.revealButton');

revealButton.addEventListener('click', function () {
    const hiddenEmail = document.querySelector('.hiddenEmail');
    const name = hiddenEmail.getAttribute('data-name');
    const domain = hiddenEmail.getAttribute('data-domain');
    const tld = hiddenEmail.getAttribute('data-tld');

    hiddenEmail.innerHTML = `${name}@${domain}.${tld}`;
    hiddenEmail.style.display = 'inline';
    revealButton.style.display = 'none';
});