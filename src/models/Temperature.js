const mongoose = require('mongoose');

const TemperatureSchema = new mongoose.Schema(
    {
        temperature: String
    }
)

module.exports = mongoose.model('Temperatures', TemperatureSchema)