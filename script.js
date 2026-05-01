document.getElementById('trip-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const tripInfo = document.getElementById('trip-info');
    tripInfo.innerHTML = `
        <h3>Your Trip to ${destination}</h3>
        <p>From: ${startDate}</p>
        <p>To: ${endDate}</p>
        <p>Enjoy your trip!</p>
    `;
});