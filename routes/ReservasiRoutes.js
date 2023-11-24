const express = require('express');
const router = express.Router();
const ReservasiServices = require('../services/UserService') ; 
  
router.post('/reservasi/', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await ReservasiServices.create(data);
    
    if (success) {
        return res.status(201).json({ success, result });  
    } else {
        return res.status(400).json({ success, result });  
    }
});

router.get('/reservasi/', async (req, res, next) => {
    const { success, result } = await ReservasiServices.getAll();

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

router.delete('/reservasi/:reservasiID', async (req, res, next) => {
    const reservasiID = req.params.reservasiID;
    const { success, result } = await ReservasiServices.deleteByID(reservasiID);

    if (success) {
        return res.status(200).json({ success, result });  
    } else {
        return res.status(404).json({ success, result });  
    }
});

module.exports = router;