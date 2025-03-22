const mongoose = require('mongoose');

const jetSchema = new mongoose.Schema({
  model: { type: String, required: true },
  productionYear: { type: Number, required: true },
  status: { type: String, enum: ['In Service', 'Under Maintenance', 'Retired'], default: 'In Service' }
});
module.exports = mongoose.model('Jet', jetSchema);