"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listings_1 = require("../database/listings");
exports.router = express_1.Router();
exports.router.get("/", (_request, response) => {
    response.json({
        message: "Hello world!"
    });
});
exports.router.get("/listings", (_request, response) => {
    response.json(listings_1.listings);
});
