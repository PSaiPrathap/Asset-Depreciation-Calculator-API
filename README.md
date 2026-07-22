# Asset Depreciation Calculator API

## Overview

The **Asset Depreciation Calculator API** is a backend RESTful service built with **Node.js** and **Express.js** to calculate the yearly depreciation of an asset using the **Straight-Line Depreciation Method**.

The API accepts the **cost of the asset**, **salvage value**, and **useful life (duration in years)** as input and returns the depreciation amount and remaining asset value for each year. The project follows a modular architecture with separate layers for routing, controllers, and business logic, making it scalable, maintainable, and easy to extend.

---

# Features

* RESTful API built with Express.js
* Calculates asset depreciation using the Straight-Line Method
* Returns year-wise depreciation details
* Input validation with meaningful error messages
* Modular project architecture
* JSON-based request and response
* Easy to integrate with frontend or third-party applications

---

# Technology Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Middleware:** CORS, Express JSON Parser
* **Language:** JavaScript (ES6)

---

# Project Structure

```text
asset-depreciation-api/
│
├── controllers/
│   └── depreciationController.js
│
├── routes/
│   └── depreciationRoutes.js
│
├── utils/
│   └── depreciationCalculator.js
│
├── server.js
├── package.json
├── README.md
└── .gitignore
```

---

# API Endpoint

### Calculate Asset Depreciation

**Method**

```http
POST /api/calculate_asset_depreciation
```

---

# Request Body

```json
{
  "costOfAsset": 100000,
  "salvageValue": 10000,
  "duration": 5
}
```

### Request Parameters

| Parameter    | Type   | Description                                   |
| ------------ | ------ | --------------------------------------------- |
| costOfAsset  | Number | Purchase price of the asset                   |
| salvageValue | Number | Estimated value at the end of its useful life |
| duration     | Number | Useful life of the asset (in years)           |

---

# Depreciation Formula

The API uses the **Straight-Line Depreciation Method**.

```
Yearly Depreciation =
(Cost of Asset − Salvage Value)
--------------------------------
       Useful Life
```

---

# Sample Response

```json
{
  "success": true,
  "method": "Straight Line Depreciation",
  "input": {
    "costOfAsset": 100000,
    "salvageValue": 10000,
    "duration": 5
  },
  "data": [
    {
      "year": 1,
      "yearlyDepreciation": 18000,
      "remainingValue": 82000
    },
    {
      "year": 2,
      "yearlyDepreciation": 18000,
      "remainingValue": 64000
    },
    {
      "year": 3,
      "yearlyDepreciation": 18000,
      "remainingValue": 46000
    },
    {
      "year": 4,
      "yearlyDepreciation": 18000,
      "remainingValue": 28000
    },
    {
      "year": 5,
      "yearlyDepreciation": 18000,
      "remainingValue": 10000
    }
  ]
}
```

---

# Validation Rules

The API validates the following conditions before performing calculations:

* All required fields must be provided.
* Asset cost must be greater than zero.
* Salvage value cannot be negative.
* Useful life (duration) must be greater than zero.
* Salvage value must be less than the asset cost.

If validation fails, the API returns an appropriate HTTP **400 Bad Request** response with an explanatory error message.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/asset-depreciation-api.git
```

Navigate to the project directory:

```bash
cd asset-depreciation-api
```

Install the required dependencies:

```bash
npm install
```

---

# Running the Application

Start the server:

```bash
npm start
```

The application will start on:

```
http://localhost:5000
```

---

# Testing the API

Use Postman, Thunder Client, or any REST client.

**Endpoint**

```http
POST http://localhost:5000/api/calculate_asset_depreciation
```

**Headers**

```
Content-Type: application/json
```

**Body**

```json
{
  "costOfAsset": 100000,
  "salvageValue": 10000,
  "duration": 5
}
```

**Output**

<img width="1920" height="1080" alt="Screenshot 2026-07-22 220619" src="https://github.com/user-attachments/assets/c3918396-37f5-4c4e-83a7-0f3085d643f6" />

---

# Project Workflow

```
Client
   │
   ▼
Express Server
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Input Validation
   │
   ▼
Depreciation Calculator
   │
   ▼
JSON Response
```

---

# Future Enhancements

* Support for multiple depreciation methods:

  * Declining Balance Method
  * Double Declining Balance Method
  * Sum-of-the-Years'-Digits Method
* Asset history management
* Database integration (MongoDB/MySQL)
* Authentication and authorization
* Swagger/OpenAPI documentation
* Unit testing with Jest
* Docker containerization
* Deployment on cloud platforms

---

# License

This project is developed for educational and assessment purposes. It may be modified and extended for production use as needed.
