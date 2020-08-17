function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        return Object.keys(distributedPassengers).reduce((acc, el) => acc + distributedPassengers[el], 0);
    }

    function calculateTotalNumberOfPassengers(passengersArr) {
        return passengersArr.reduce((acc, el) => acc + el, 0);
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();