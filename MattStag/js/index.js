const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');
const menuClose = document.querySelector('.fa-times');
const eventDetailsContainer = document.querySelectorAll('.event-details-container');

backdrop.addEventListener('click', function () {
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
});

menuClose.addEventListener('click', function () {
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
});

toggleButton.addEventListener('click', function () {
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
    for (let index = 0; index < eventDetailsContainer.length; index++) {
        eventDetailsContainer[index].style.display = "none";
    }
});