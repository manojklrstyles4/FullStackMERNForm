const FormData = require('../models/FormData');

exports.submitForm = async (req, res) => {
    try {
        const formData = new FormData({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        const savedData = await formData.save();
        res.status(201).json({ 
            message: 'Data saved successfully',
            data: savedData
        });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(400).json({ 
            message: 'Error saving data', 
            error: error.message 
        });
    }
};

exports.getAllForms = async (req, res) => {
    try {
        const forms = await FormData.find().sort({ createdAt: -1 });
        res.status(200).json(forms);
    } catch (error) {
        res.status(400).json({ 
            message: 'Error fetching data', 
            error: error.message 
        });
    }
};