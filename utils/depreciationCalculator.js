const calculateYearlyDepreciation = (
    costOfAsset,
    salvageValue,
    duration
) => {

    const yearlyDepreciation =
        (costOfAsset - salvageValue) / duration;

    let currentValue = costOfAsset;

    const result = [];

    for (let year = 1; year <= duration; year++) {

        currentValue -= yearlyDepreciation;

        if (currentValue < salvageValue) {
            currentValue = salvageValue;
        }

        result.push({
            year,
            yearlyDepreciation: Number(
                yearlyDepreciation.toFixed(2)
            ),
            remainingValue: Number(
                currentValue.toFixed(2)
            )
        });

    }

    return result;

};

module.exports = {
    calculateYearlyDepreciation
};