document.querySelectorAll(".read-more-btn").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let span = this.previousElementSibling.querySelector(".more-text");
        if (span.style.display === "none") {
            span.style.display = "inline";
            this.textContent = "Read Less";
        } else {
            span.style.display = "none";
            this.textContent = "Read More";
        }
    });
});
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Change icon to 'X'
    navbar.classList.toggle('active'); // Show/hide navbar
}

window.onscroll = () => {
    menu.classList.remove('fa-times'); // Reset to bars icon
    navbar.classList.remove('active'); // Hide navbar
}

