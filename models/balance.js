const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true
  },
  currentBalance: {
    type: Number,
    required: true,
    default: 0
  },
  freezedBalance: {
    type: Number,
    required: false,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false,
    required: true
  }
}, {
  collection: 'balances',
  timestamps: true
});

module.exports = mongoose.model('Balance', schema);
