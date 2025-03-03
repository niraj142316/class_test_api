const mongoose = require("mongoose");

const resultDsaSchema = new mongoose.Schema({
    regNumber: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
    semester: { type: String, required: true },
    subject: { type: String, required: true },
    result: { type: String, required: true }
});

const ResultDsa = mongoose.model("ResultDsa", resultDsaSchema);
module.exports = ResultDsa;
