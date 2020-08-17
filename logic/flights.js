function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if (!Number.isInteger(passengers) || passengers <= 0) {
            throw Error("The number of passengers must be a positive integer value");
        }
        if (!Number.isInteger(capacity) || capacity <= 0) {
            throw Error("The capacity of the flight must be a positive integer value");
        }
        if (passengers%capacity === 0) {
            return passengers/capacity;
        } else {
            return Math.trunc(passengers/capacity) + 1;
        }
    }
    
    function checkAircraftRevision(distanceLimit, distancesArr) {
        const totalDistance = distancesArr.reduce((acc, val) => acc + val, 0);
        if (totalDistance <= distanceLimit/2) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance > distanceLimit/2 && totalDistance <= (distanceLimit/4)*3) {
            return "The revision needs to be done within the next 2 months";
        } else if (totalDistance > (distanceLimit/4)*3 && totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month";
        } else if (totalDistance > distanceLimit) {
            throw Error();
        }
    }
    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();