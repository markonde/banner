// Countdown Timer
const countdownElement = document.getElementById('countdown');

// Set the date of the offer deadline
const offerDeadline = new Date('2025-05-15T23:59:59');

// Update the countdown every second
const updateCountdown = () => {
    const now = new Date();
    const timeLeft = offerDeadline - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "The offer has ended!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `⏳ Offer Ends In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Run the countdown timer
updateCountdown();
setInterval(updateCountdown, 1000);

// Dynamic Banner Background on Hover
const banner = document.getElementById('banner');
banner.addEventListener('mouseenter', () => {
    banner.style.background = "linear-gradient(135deg, #ff66a3, #ff99cc)";
});
banner.addEventListener('mouseleave', () => {
    banner.style.background = "linear-gradient(135deg, #ff99cc, #ffccff)";
});