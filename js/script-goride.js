// Function to navigate to the Ride Details page
function navigateToRideDetails() {
    window.open("ride-final.html", "_blank");
}

// Attach an event listener to the button for navigation
document.addEventListener("DOMContentLoaded", function () {
    const viewRideDetailsButton = document.getElementById("view-ride-details-button");

    if (viewRideDetailsButton) {
        viewRideDetailsButton.addEventListener("click", navigateToRideDetails);
    }
});
