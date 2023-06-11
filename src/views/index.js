
// Smooth scrolling for Back To Top button
document.addEventListener('DOMContentLoaded', function () {
    var goUpButton = document.querySelector('.back-to-top');
    goUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        var scrollOptions = {
            top: 0,
            behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
    });
});
