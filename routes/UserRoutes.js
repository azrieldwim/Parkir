const express = require('express');
const router = express.Router();
const UserServices = require('../services/UserService') ; 
 
router.post('/user/', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await UserServices.create(data);
    
    if (success) {
        return res.status(201).json({ success, result });  
    } else {
        return res.status(400).json({ success, result });  
    }
});

router.get('/user/', async (req, res, next) => {
    const { success, result } = await UserServices.getAll();

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.get('/user/:userID', async (req, res, next) => {
    const userID = req.params.userID;
    const { success, result } = await UserServices.findByID(userID);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.put('/user/:userID', async (req, res, next) => {
    const userID = req.params.userID;
    const data = req.body;
    const { success, result } = await UserServices.updateByID(userID, data);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.delete('/user/:userID', async (req, res, next) => {
    const userID = req.params.userID;
    const { success, result } = await UserServices.deleteByID(userID);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

module.exports = router;