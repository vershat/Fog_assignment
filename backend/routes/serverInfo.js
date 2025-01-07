const express = require('express');
const router = express.Router();
const serverData = require('../data/serverData.json');

router.get('/', (req, res) => {
    res.json(serverData);
});

module.exports = router;
