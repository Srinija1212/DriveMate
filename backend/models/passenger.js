const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    car_model: String,
    car_number: String,
    preferences: String,
    loyalty_points: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Passenger", passengerSchema);
