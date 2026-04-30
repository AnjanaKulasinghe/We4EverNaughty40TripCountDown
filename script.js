// Trip date: May 8, 2027 at midnight (Bali time - GMT+8)
const tripDate = new Date('2027-05-08T00:00:00+08:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = tripDate - now;

    // Calculate time units
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update DOM elements
    document.getElementById('days').textContent = String(days).padStart(3, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Check if countdown has ended
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        showTripStarted();
    }
}

function showTripStarted() {
    const countdownContainer = document.querySelector('.countdown-container');
    countdownContainer.innerHTML = `
        <div class="countdown-label">🎉 The Adventure Has Begun! 🎉</div>
        <div style="text-align: center; padding: 60px 20px;">
            <div style="font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; 
                background: linear-gradient(135deg, #ff6b35, #ffd23f); 
                -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
                margin-bottom: 20px;">
                We're in Bali! 🌴🏝️
            </div>
            <div style="font-size: clamp(1.2rem, 3vw, 1.8rem); color: #00d9ff; font-weight: 600;">
                Making memories that will last forever!
            </div>
        </div>
    `;
}

// Initialize countdown
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to detail cards
    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Log trip info to console (for fun)
    console.log('%c🌴 We4Ever Naughty 40 - Bali 2027 🌴', 
        'font-size: 20px; font-weight: bold; color: #ff6b35;');
    console.log('%cFrom school mates to world travelers, We4Ever!', 
        'font-size: 14px; color: #00d9ff;');
    
    // Calculate total days until trip
    const now = new Date().getTime();
    const timeRemaining = tripDate - now;
    const totalDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    
    console.log(`Days until Bali: ${totalDays}`);
});

// Add some easter eggs
let clickCount = 0;
document.querySelector('.main-title').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'fadeInDown 1s ease-out, pulse 2s ease-in-out infinite';
        }, 10);
        clickCount = 0;
    }
});
