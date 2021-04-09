const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'Individual',
      'Private Limited',
      'LLP',
      'Proprietary',
      'Partnership',
      'Public Limited',
      'Trust',
      'Society',
      'NGO'
    ]
  },
  bankName: {
    type: String,
    required: true
  },
  beneficiaryName: {
    type: String,
    required: true
  },
  ifscCode: {
    type: String,
    required: function() {
      return !this.swiftCode;
    }
  },
  swiftCode: {
    type: String,
    required: function() {
      return !this.ifscCode;
    }
  },
  accountNumber: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {
  collection: 'bank-accounts',
  retainKeyOrder: true,
  timestamps: true
});

module.exports = mongoose.model('BankAccount', schema);
