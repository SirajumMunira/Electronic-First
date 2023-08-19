document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.getElementById("navMenu");
    const searchBar = document.getElementById("searchBar");
    const searchIcon = document.getElementById("searchIcon");
    const searchCloseButton = document.getElementById("searchCloseButton");
    const navChild = document.getElementById("navChild");
    const parentItems = document.querySelectorAll(".parent-item");

    parentItems.forEach(function(item) {
        item.addEventListener("click", function () {
            navChild.classList.toggle("child-menu");
        });
    });

    searchIcon.addEventListener("click", function() {
        navMenu.style.display = "none";
        searchBar.style.display = "flex";
    });

    searchCloseButton.addEventListener("click", function() {
        navMenu.style.display = "flex";
        searchBar.style.display = "none";
    });
});
