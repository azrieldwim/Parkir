const express = require('express');
const router = express.Router();
const ReservasiServices = require('../services/UserService') ; 
  

/**
 * @swagger
 * tags:
 *   name: Reservasi
 *   description: Operations related to reservations
 */

 
/**
 * @swagger
 * /reservasi:
 *   post:
 *     summary: Create reservation
 *     description: Create a new reservation
 *     tags: [Reservasi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservasi'
 *     responses:
 *       "201":
 *         description: Successfully created reservation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservasi'
 *       "400":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   type: string
 */

router.post('/reservasi/', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await ReservasiServices.create(data);

    if (success) {
        return res.status(201).json({ success, result });
    } else {
        return res.status(400).json({ success, result });
    }
});

/**
 * @swagger
 * /reservasi:
 *   get:
 *     summary: Get all reservations
 *     description: Retrieve a list of all reservations
 *     tags: [Reservasi]
 *     responses:
 *       "200":
 *         description: Successfully retrieved reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reservasi'
 *       "404":
 *         description: Reservations not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   type: string
 */

router.get('/reservasi/', async (req, res, next) => {
    const { success, result } = await ReservasiServices.getAll();

    if (success) {
        return res.status(200).json({ success, result });
    } else {
        return res.status(404).json({ success, result });
    }
});

/**
 * @swagger
 * /reservasi/{reservasiID}:
 *   delete:
 *     summary: Delete reservation by ID
 *     description: Delete a reservation by ID
 *     tags: [Reservasi]
 *     parameters:
 *       - in: path
 *         name: reservasiID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully deleted reservation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   type: string
 *       "404":
 *         description: Reservation not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   type: string
 */

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