document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon'); 
    var navbarNav = document.querySelector('.navbar-nav');
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // toggle the menu
    menuIcon.addEventListener('click', function () {
        navbarNav.classList.add('show');
        closeIcon.style.display = 'block'; 
    });

    // close the menu
    closeIcon.addEventListener('click', function () {
        navbarNav.classList.remove('show');
        this.style.display = 'none'; 
    });

    // toggle dropdown items within the navbar
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
        dropdownToggle.classList.toggle('active');
    });

    // fetch and populate the dropdown menu
    fetch('https://cdn.shopify.com/s/files/1/0593/0018/4179/files/menu.json?v=1709760796')
    .then(response => response.json())
    .then(data => {
        // shuffle array using a shuffle algorithm
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        
        // slice the first three items
        const randomThreeItems = data.slice(0, 3);

        // clear previous items
        dropdownMenu.innerHTML = '';

        // append new items to the dropdown
        randomThreeItems.forEach(item => {
            const element = document.createElement('a');
            element.classList.add('dropdown-item');
            element.textContent = item.name; 
            dropdownMenu.appendChild(element);
        });
    })
    .catch(error => console.log('Error fetching menu:', error));
});