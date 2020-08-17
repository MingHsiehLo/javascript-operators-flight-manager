function Passengers() {
    function checkFlightCapacity(capacity, passengersArr) {
        const totalPassengers = passengersArr.reduce((acc, val) => acc + val, 0);
        if (totalPassengers < capacity) {
            return totalPassengers;
        } else if (totalPassengers > capacity) {
            throw Error();
        }
    }

    function distributeAllSeatsToAllPassengers(vipP, regularP, flights, businessS, economyS) {
        businessS *= flights;
        economyS *= flights;
        const resultObj = {
            vipPassengersWithBusinessSeats: 0,
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0,
            regularPassengersWithEconomySeats: 0
        }
        if (vipP <= businessS) {
            resultObj.vipPassengersWithBusinessSeats = vipP;
            businessS -= vipP;
            if (regularP <= businessS) {
                resultObj.regularPassengersWithBusinessSeats = regularP;
            } else {
                resultObj.regularPassengersWithBusinessSeats = businessS;
                resultObj.regularPassengersWithEconomySeats = regularP - businessS;
            }
        } else {
            resultObj.vipPassengersWithBusinessSeats = businessS;
            vipP -= businessS;
            resultObj.vipPassengersWithEconomySeats = vipP;
            economyS -= vipP;
            if (regularP <= economyS) {
                resultObj.regularPassengersWithEconomySeats = regularP;
            } else {
                resultObj.regularPassengersWithEconomySeats = economyS;
            }
        }
        return resultObj;
    }
    return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();