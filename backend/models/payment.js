const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    passenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Passenger",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    payment_method: {
      type: String,
      enum: ["UPI", "CreditCard", "DebitCard", "Wallet", "Cash"],
      required: true,
    },
    transaction_id: {
      type: String,
      unique: true,
      sparse: true,
    },
    status: {
      type: String,
      enum: ["pending", "successful", "failed", "refunded"],
      default: "pending",
    },
    payment_time: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
