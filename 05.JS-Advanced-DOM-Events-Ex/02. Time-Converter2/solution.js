function attachEventsListeners() {

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const convertButtons = document.querySelectorAll('input[type=button]');

    for (const button of convertButtons) {
        button.addEventListener('click', onConvert);
    }

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        let days = value / ratios[unit];

        return {
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        }
    }

    function onConvert(e) {
        const currentButton = e.target;
        let inputElement = currentButton.previousElementSibling;
        
        let time = convert(Number(inputElement.value), inputElement.id);
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }
}