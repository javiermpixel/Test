document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon'); 
    var navbarNav = document.querySelector('.navbar-nav');
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Event listener to toggle the menu
    menuIcon.addEventListener('click', function () {
        navbarNav.classList.add('show');
        closeIcon.style.display = 'block'; 
    });

    // Event listener to close the menu
    closeIcon.addEventListener('click', function () {
        navbarNav.classList.remove('show');
        this.style.display = 'none'; 
    });

    // Event listener to toggle dropdown items within the navbar
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
        dropdownToggle.classList.toggle('active');
    });

    // Fetch dropdown menu items from the JSON file
    fetch('https://cdn.shopify.com/s/files/1/0593/0018/4179/files/menu.json?v=1709760796')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const element = document.createElement('a');
                element.setAttribute('href', item.url);
                element.classList.add('dropdown-item');
                element.textContent = item.label;
                dropdownMenu.appendChild(element);
            });
        })
        .catch(error => console.log('Error fetching menu:', error));
});