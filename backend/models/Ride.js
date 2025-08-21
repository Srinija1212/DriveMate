const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    passenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Passenger",
      required: true,
    },
    source_location: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: Date,
    ride_status: {
      type: String,
      enum: ["requested", "assigned", "ongoing", "completed", "cancelled"],
      default: "requested",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ride", rideSchema);
