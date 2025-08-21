const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["passenger", "driver"],
      required: true,
    },
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    phone_number: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

// hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
