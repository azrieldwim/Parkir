const express = require('express');
const router = express.Router();
const ParkirServices = require('../services/ParkirService');
 
/**
 * @swagger
 * tags:
 *   name: Parkir
 *   description: Operations related to parking
 */

/**
 * @swagger
 * /parkir:
 *   post:
 *     summary: Create parking
 *     description: Create a new parking space
 *     tags: [Parkir]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parkir'
 *     responses:
 *       "201":
 *         description: Successfully created parking space
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parkir'
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

router.post('/parkir/', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await ParkirServices.create(data);

    if (success) {
        return res.status(201).json({ success, result });
    } else {
        return res.status(400).json({ success, result });
    }
});

/**
 * @swagger
 * /parkir:
 *   get:
 *     summary: Get all parking spaces
 *     description: Retrieve a list of all parking spaces
 *     tags: [Parkir]
 *     responses:
 *       "200":
 *         description: Successfully retrieved parking spaces
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
 *                     $ref: '#/components/schemas/Parkir'
 *       "404":
 *         description: Parking spaces not found
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

router.get('/parkir/', async (req, res, next) => {
    const { success, result } = await ParkirServices.getAll();

    if (success) {
        return res.status(200).json({ success, result });
    } else {
        return res.status(404).json({ success, result });
    }
});

/**
 * @swagger
 * /parkir/{parkirID}:
 *   get:
 *     summary: Get parking space by ID
 *     description: Retrieve a parking space by ID
 *     tags: [Parkir]
 *     parameters:
 *       - in: path
 *         name: parkirID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully retrieved parking space
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parkir'
 *       "404":
 *         description: Parking space not found
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

router.get('/parkir/:parkirID', async (req, res, next) => {
    const parkirID = req.params.parkirID;
    const { success, result } = await ParkirServices.findByID(parkirID);

    if (success) {
        return res.status(200).json({ success, result });
    } else {
        return res.status(404).json({ success, result });
    }
});

/**
 * @swagger
 * /parkir/{parkirID}:
 *   put:
 *     summary: Update parking space by ID
 *     description: Update a parking space by ID
 *     tags: [Parkir]
 *     parameters:
 *       - in: path
 *         name: parkirID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parkir'
 *     responses:
 *       "200":
 *         description: Successfully updated parking space
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parkir'
 *       "404":
 *         description: Parking space not found
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

/**
 * @swagger
 * /parkir/{parkirID}:
 *   delete:
 *     summary: Delete parking space by ID
 *     description: Delete a parking space by ID
 *     tags: [Parkir]
 *     parameters:
 *       - in: path
 *         name: parkirID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully deleted parking space
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
 *         description: Parking space not found
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