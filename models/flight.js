const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD'], 
    },
    arrival: {
        type: Date,
    },
}, {
    timestamps: true,
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD'],
        default: 'ORD',
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {return Date.now() + 365*24*60*60*1000}
    },
    destinations: [destinationSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);