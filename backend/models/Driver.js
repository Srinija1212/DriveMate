const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    aadhar_number: {
      type: String,
      unique: true,
      required: true,
    },
    pan_number: {
      type: String,
      unique: true,
      required: true,
    },
    driving_license: {
      type: String,
      unique: true,
      required: true,
    },
    experience_years: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0.0,
      min: 0,
      max: 5,
    },
    availability_status: {
      type: String,
      enum: ["available", "busy", "inactive"],
      default: "available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", driverSchema);
