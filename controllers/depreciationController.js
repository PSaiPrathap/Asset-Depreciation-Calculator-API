const {
    calculateYearlyDepreciation
} = require("../utils/depreciationCalculator");

const calculateDepreciation = (req, res) => {

    try {

        const {
            costOfAsset,
            salvageValue,
            duration
        } = req.body;

        if (
            costOfAsset === undefined ||
            salvageValue === undefined ||
            duration === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide costOfAsset, salvageValue and duration."
            });
        }

        if (
            costOfAsset <= 0 ||
            salvageValue < 0 ||
            duration <= 0
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid input values."
            });
        }

        if (salvageValue >= costOfAsset) {
            return res.status(400).json({
                success: false,
                message: "Salvage value must be less than cost of asset."
            });
        }

        const depreciationData =
            calculateYearlyDepreciation(
                Number(costOfAsset),
                Number(salvageValue),
                Number(duration)
            );

        return res.status(200).json({
            success: true,
            method: "Straight Line Depreciation",
            input: {
                costOfAsset,
                salvageValue,
                duration
            },
            data: depreciationData
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    calculateDepreciation
};