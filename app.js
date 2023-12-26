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


function copyText() {
    // Get the text from the link
    var emailAddress = document.getElementById("e-address");
    emailAddress.value = 'cristigtzname@gmail.com'

    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = emailAddress;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    navigator.clipboard.writeText(emailAddress.value);

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Alert the user that the text has been copied (you can customize this part)
    alert("Email address has been copied!");
  }