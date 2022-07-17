const express = require("express");
const machine = express.Router();
const machineData = require("../models/machine.model.js");

machine.get("/", (req, res) => {
    res.json(machineData)
})

module.exports = machine