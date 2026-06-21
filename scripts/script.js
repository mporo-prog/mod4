document.addEventListener("DOMContentLoaded", () => {
    burgerMenu = document.querySelector("[data-test='burgerMenu']");
    burgerMenu.addEventListener("click", () => {
        const burgerButton = document.querySelector("[data-test='burgerButton']");
        const currentUrl = encodeURIComponent(window.location.href);
        burgerButton.href = `menu.html?return=${currentUrl}`;
    })
});