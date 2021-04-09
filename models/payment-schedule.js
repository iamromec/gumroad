const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  cycle: {
    type: String,
    required: false,
    default: 'week-before',
    enum: [
      'week-before', 
      'once-a-week',
      'on-date'
    ]
  },
  day: {
    type: String,
    enum: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    required: function() {
      return ['once-a-week', 'week-before'].includes(this.cycle);
    }
  },
  date: {
    type: Date,
    required: function() {
      return this.cycle === 'on-date';
    }
  },
  time: {
    type: Date,
    required: true
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
  collection: 'payment-schedule',
  timestamps: true
});

module.exports = mongoose.model('PaymentSchedule', schema);
