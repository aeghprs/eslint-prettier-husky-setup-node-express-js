const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.send("<h2>Hello from the other side</h2>");
});

module.exports = router;
