document.getElementById('startButton').addEventListener('click', function() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    
    if (!dateInput || !timeInput) {
        alert('Please select both date and time.');
        return;
    }

    const targetDateTime = new Date(`${dateInput}T${timeInput}`);
    startCountdown(targetDateTime);
});

function startCountdown(targetDateTime) {
    const countdownDisplay = document.getElementById('countdownDisplay');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDateTime - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = '00:00:00';
            alert('Countdown finished!');
            return;
        }

        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}
