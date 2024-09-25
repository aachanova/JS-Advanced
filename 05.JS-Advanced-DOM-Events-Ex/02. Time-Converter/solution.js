function attachEventsListeners() {

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const convertButtons = document.querySelectorAll('input[type=button]');

    for (const button of convertButtons) {
        button.addEventListener('click', onConvert);
    }

    // convertButtons.forEach(button => {
    //     button.addEventListener('click', onConvert);
    // });


    function onConvert(e) {
        const currentButton = e.target;
        let valueToConvert = 0;

        if (currentButton.id === 'daysBtn') {
            valueToConvert = Number(daysElement.value);
            hoursElement.value = valueToConvert * 24;
            minutesElement.value = valueToConvert * 1440;
            secondsElement.value = valueToConvert * 86400;
        } else if (currentButton.id === 'hoursBtn') {
            valueToConvert = Number(hoursElement.value);
            daysElement.value = valueToConvert / 24;
            minutesElement.value = valueToConvert * 60;
            secondsElement.value = valueToConvert * 3600;
        } else if (currentButton.id === 'minutesBtn') {
            valueToConvert = Number(minutesElement.value);
            daysElement.value = valueToConvert / 1440;
            hoursElement.value = valueToConvert / 60;
            secondsElement.value = valueToConvert * 60;
        } else if (currentButton.id === 'secondsBtn') {
            valueToConvert = Number(secondsElement.value);
            daysElement.value = valueToConvert / 86400;
            hoursElement.value = valueToConvert / 3600;
            minutesElement.value = valueToConvert / 60;
        }
    }
}