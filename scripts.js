document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();

        const timeUTC = now.toUTCString().split(' ')[4];
        const dayIndex = now.getUTCDay();
        const dayUTC = daysOfWeek[dayIndex];

        document.getElementById('currentTimeUTC').textContent = timeUTC;
        document.getElementById('currentDay').textContent = dayUTC;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
