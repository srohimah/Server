const express = require('express');
const axios = require('axios')
const router = express.Router();

const { getReply } = require('../controllers/replies')

/* GET home page. */
router.get('/', getReply);

module.exports = router;