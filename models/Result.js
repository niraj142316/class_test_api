const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    regNumber: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
    semester: { type: String, required: true },
    subject: { type: String, required: true },
    result: { type: String, required: true }
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
