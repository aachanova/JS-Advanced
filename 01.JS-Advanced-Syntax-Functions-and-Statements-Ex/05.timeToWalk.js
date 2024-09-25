function timeToWalk(steps, footprintInMeters, speedInKmPerHour) {
    // t = S / V;
    const distanceInMeters = steps * footprintInMeters;
    const speedInMetersPerSec = speedInKmPerHour / 3.6;
    const restCount = Math.floor(distanceInMeters / 500);
    const timeInSec = distanceInMeters / speedInMetersPerSec + restCount * 60;

    function addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    const hours = Math.floor(timeInSec / 3600);
    let remainingSec = timeInSec % 3600;

    const min = Math.floor(remainingSec / 60);
    const sec = Math.round(remainingSec % 60);

    console.log(`${addLeadingZero(hours)}:${addLeadingZero(min)}:${addLeadingZero(sec)}`);    
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);