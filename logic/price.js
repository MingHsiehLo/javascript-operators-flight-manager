function Prices() {
    function calculateFinalPrice(base, variationP, variationF) {
        const firstReduction = (base + (base*(variationP/100))).toFixed(2);
        const secondReduction = (+firstReduction + (+firstReduction*(variationF/100))).toFixed(2);
        return secondReduction;
    }

    function calculateDefaultFinalPrice(base, pType, fType) {
        if (pType.toLowerCase() === "regular") {
            base -= (base*0.05);
        } else {
            base += (base*0.05);
        }
        if (fType.toLowerCase() === "economy") {
            base -= (base*0.03);
        } else {
            base += (base*0.1);
        }
        return base;
    }

    function calculateTotalFinalPrice(seatNumbers, passengerType, flightType, basePrice) {
        return seatNumbers * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice };
}

module.exports = Prices();
