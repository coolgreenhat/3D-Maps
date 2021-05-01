const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mapSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
}, {
    timestamps: true,
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;