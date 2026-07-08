// backend/models/Dictionary.js
const mongoose = require('mongoose');

const dictionarySchema = new mongoose.Schema({
  word_vi: { type: String, required: true }, // Tiếng Việt (VD: xin chào)
  word_vi_slug: { type: String, required: true }, // Slug của từ tiếng Việt (VD: xin-chao)
  word_bru: { type: String, required: true }, // Tiếng Bru (VD: ngai chào)
  category: { type: String, default: 'giao-tiep' }
});

module.exports = mongoose.model('Dictionary', dictionarySchema);