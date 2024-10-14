class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const currentFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (!currentFlight) {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        } else {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }
    };

    bookFlight(passengerName, flightNumber) {
        const currentFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (currentFlight) {
            this.bookings.push({ passengerName, flightNumber });
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        } else {
            return `Flight ${flightNumber} is not available for booking.`;
        }
    };

    cancelBooking(passengerName, flightNumber) {
        const searchedBooking = this.bookings.find(b =>
            b.passengerName === passengerName && b.flightNumber === flightNumber
        );

        if (searchedBooking) {
            this.bookings = this.bookings.filter(b =>
                b.passengerName !== passengerName && b.flightNumber !== flightNumber
            );
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        } else {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
    };

    showBookings(criteria) {
        const criterias = ['all', 'cheap', 'expensive'];

        
    };
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.cancelBooking("Alice", "AA101"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

// const system = new FlightBookingSystem("TravelWorld");

// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("expensive"));
// console.log(system.showBookings("cheap")); 