const express = require("express");

const router = express.Router();

const {
    calculateDepreciation
} = require("../controllers/depreciationController");

router.post(
    "/calculate_asset_depreciation",
    calculateDepreciation
);

module.exports = router;