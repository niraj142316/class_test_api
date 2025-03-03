const express = require("express");
const router = express.Router();
const Result = require("./models/Result");
const ResultDsa = require("./models/ResultDsa");

// GET result by regNumber with filters
router.get("/:regNumber", async (req, res) => {
    try {
        const { branch, semester, subject } = req.query;
        const { regNumber } = req.params;

        const query = { regNumber };

        if (branch) query.branch = branch;
        if (semester) query.semester = semester;
        if (subject) query.subject = subject;

        const result = await Result.findOne(query);

        if (result) {
            res.json({ result: result.result });
        } else {
            res.json({ result: "No record found Please contact to admin 6201506394" });
        }
    } catch (error) {
        console.error("Error fetching result:", error);
        res.status(500).json({ result: "Internal Server Error" });
    }
});

// POST new result (for adding results)
router.post("/upload", async (req, res) => {
    try {
        const { regNumber, branch, semester, subject, result } = req.body;
        const newResult = new Result({ regNumber, branch, semester, subject, result });

        await newResult.save();
        res.status(201).json({ message: "Result added successfully!" });
    } catch (error) {
        console.error("Error adding result:", error);
        res.status(500).json({ error: "Failed to add result" });
    }
});

//post data in other collection
router.post("/upload_dsa", async (req, res) => {
    try {
        const { regNumber, branch, semester, subject, result } = req.body;
        const newResultDsa = new ResultDsa({ regNumber, branch, semester, subject, result });

        await newResultDsa.save();
        res.status(201).json({ message: "Result added successfully!" });
    } catch (error) {
        console.error("Error adding result:", error);
        res.status(500).json({ error: "Failed to add result" });
    }
});

module.exports = router;
