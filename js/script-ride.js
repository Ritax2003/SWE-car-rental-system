let countdownInterval; 

function startCountdown() {
    const timerElement = document.getElementById("countdown-timer");
    const cancelButton = document.getElementById("cancel-button-end");

    let minutes = 0;
    let seconds = 10;

    countdownInterval = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Cancellation Period has ended";
            cancelButton.disabled = true; // Disable the "Cancel Ride" button
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            const formattedMinutes = String(minutes).padStart(2, "0");
            const formattedSeconds = String(seconds).padStart(2, "0");
            timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
        }
    }, 1000);
}

// Attach an event listener to start the countdown when the page loads
document.addEventListener("DOMContentLoaded", startCountdown);

// Function to handle ride cancellation
function cancelRide() {
    // You can implement logic to cancel the ride here
    // This could involve making an AJAX request to cancel the ride

    // Show an alert to inform the user that the ride has been canceled
    alert("Ride has been canceled.");

    // Wait for 3 seconds (adjust the time as needed)
    setTimeout(function() {
        // Redirect the user to the user page (or any other page)
        window.location.href = "user.html" // Replace with the correct URL
    }, 3000); // 3000 milliseconds (3 seconds)
}
const cancelButton = document.getElementById("cancel-button-end");
if (cancelButton) {
    cancelButton.addEventListener("click", cancelRide);
}
