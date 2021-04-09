const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true
  },
  paymentSchedule: {
    type: Schema.Types.ObjectId,
    ref: 'PaymentSchedule',
    required: true,
    index: true,
    validate: {
      isAsync: true,
      validator: function(v, cb) {
        mongoose.model('PaymentSchedule').findById(v, {
          _id: true
        }).then(r => cb(!!r));
      }
    }
  },
  amount: { //to be credited
    type: Number,
    required: true
  },
  currency: { //can be USD/CAD/AUD
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'initiated',
    enum: [
      'initiated',
      'processed',
      'on-hold',
      'refunded',
      'completed'
    ]
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
  collection: 'payments',
  timestamps: true
});

module.exports = mongoose.model('Payment', schema);
