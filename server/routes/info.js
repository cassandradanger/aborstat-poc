
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("here is the info you requested")
});

module.exports = router;