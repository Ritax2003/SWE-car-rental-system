// Function to navigate to the Ride Details page
function navigateToRideDetails() {
    setTimeout(function () {
        // Redirect the user to the user page (or any other page)
        window.location.href = "user.html"; // Replace with the correct URL
    }, 1000); // 1000 milliseconds (1 second)
}

// Attach an event listener to the button for navigation
document.addEventListener("DOMContentLoaded", function () {
    const viewRideDetailsButton = document.getElementById("cancel-button-2");

    if (viewRideDetailsButton) {
        viewRideDetailsButton.addEventListener("click", navigateToRideDetails);
    }
});
