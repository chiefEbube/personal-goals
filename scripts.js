document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const timeUTC = now.toUTCString().split(' ')[4];
        const dayUTC = now.toUTCString().split(',')[0];

        document.getElementById('currentTimeUTC').textContent = timeUTC;
        document.getElementById('currentDay').textContent = dayUTC;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
