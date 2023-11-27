const express = require('express');
const router = express.Router();
const UserServices = require('../services/UserService') ; 
 
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to users
 */
 
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create user
 *     description: Create a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       "201":
 *         description: Successfully created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
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

router.post('/user/', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await UserServices.create(data);

    if (success) {
        return res.status(201).json({ success, result });
    } else {
        return res.status(400).json({ success, result });
    }
});

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     tags: [User]
 *     responses:
 *       "200":
 *         description: Successfully retrieved users
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
 *                     $ref: '#/components/schemas/User'
 *       "404":
 *         description: Users not found
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

router.get('/user/', async (req, res, next) => {
    const { success, result } = await UserServices.getAll();

    if (success) {
        return res.status(200).json({ success, result });
    } else {
        return res.status(404).json({ success, result });
    }
});

/**
 * @swagger
 * /user/{userID}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully retrieved user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       "404":
 *         description: User not found
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

router.get('/user/:userID', async (req, res, next) => {
    const userID = req.params.userID;
    const { success, result } = await UserServices.findByID(userID);

    if (success) {
        return res.status(200).json({ success, result });
    } else {
        return res.status(404).json({ success, result });
    }
});
/**
 * @swagger
 * /user/{userID}:
 *   put:
 *     summary: Update user by ID
 *     description: Update a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       "200":
 *         description: Successfully updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       "404":
 *         description: User not found
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
/**
 * @swagger
 * /user/{userID}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully deleted user
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
 *         description: User not found
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

router.delete('/user/:userID', async (req, res, next) => {
    const userID = req.params.userID;
    const { success, result } = await UserServices.delete(userID);

    if (success) {
        return res.status(200).json({ success, result });
    } else {
        return res.status(404).json({ success, result });
    }
});

module.exports = router;