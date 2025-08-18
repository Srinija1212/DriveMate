const crypto = require("crypto");

// Generate OTP
exports.generateOtp = (length = 6) => {
  return Math.floor(100000 + Math.random() * 900000)
    .toString()
    .substring(0, length);
};

// Hash string (useful for OTP / tokens)
exports.hashString = (str) => {
  return crypto.createHash("sha256").update(str).digest("hex");
};

// Validate email
exports.validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Validate phone number (India specific)
exports.validatePhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};
