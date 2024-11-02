const express = require('express');
const { submitForm, getAllForms } = require('../controllers/formController');
const router = express.Router();

router.post('/', submitForm);
router.get('/', getAllForms);

module.exports = router;