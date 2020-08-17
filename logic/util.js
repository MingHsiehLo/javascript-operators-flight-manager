function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        return Object.keys(distributedPassengers).reduce((acc, el) => acc + distributedPassengers[el], 0);
    }

    function calculateTotalNumberOfPassengers(passengersArr) {
        return passengersArr.reduce((acc, el) => acc + el, 0);
    }

    function checkInput(input) {
        if (typeof input !== 'number' || !input) {
            throw Error();
        }
    }

    function calculateTotalDistance(distanceArr) {
        return distanceArr.reduce((acc, val) => {
            return val > 0 ? acc + val : acc + 0;
        }, 0);
    }

    function calculateBonusPoints(businessDisArr, economyDisArr, businessBonusPercent, economyBonusPercent) {
        const businessPoints = calculateTotalDistance(businessDisArr) * (businessBonusPercent/100);
        const economyPoints = calculateTotalDistance(economyDisArr) * (economyBonusPercent/100);
        return businessPoints + economyPoints;
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };
}

module.exports = Util();