const express = require('express');
const router = express.Router();
const ParkirServices = require('../services/ParkirService');
 
router.post('/parkir/', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await ParkirServices.create(data);
    
    if (success) {
        return res.status(201).json({ success, result });  
    } else {
        return res.status(400).json({ success, result });  
    }
});

router.get('/parkir/', async (req, res, next) => {
    const { success, result } = await ParkirServices.getAll();

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.get('/parkir/:parkirID', async (req, res, next) => {
    const parkirID = req.params.parkirID;
    const { success, result } = await ParkirServices.findByID(parkirID);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.put('/parkir/:parkirID', async (req, res, next) => {
    const parkirID = req.params.parkirID;
    const data = req.body;
    const { success, result } = await ParkirServices.updateByID(parkirID, data);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.delete('/parkir/:parkirID', async (req, res, next) => {
    const parkirID = req.params.parkirID;
    const { success, result } = await ParkirServices.deleteByID(parkirID);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

module.exports = router;