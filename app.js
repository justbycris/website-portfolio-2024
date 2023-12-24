// JavaScript to animate the loading line in the header
document.addEventListener('DOMContentLoaded', function () {
    const loadingLine = document.getElementById('navLine');

    function animateLoadingLine() {
        let width = 0;
        const interval = setInterval(function () {
            width += 4; // Adjust the speed of the animation by changing this value
            loadingLine.style.width = width + '%';

            if (width >= 65) {
                clearInterval(interval);
            }
        }, 20); // Adjust the interval to control the smoothness of the animation
    }

    animateLoadingLine();


});


