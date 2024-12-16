import express from 'express';
import {renderMainPage, 
    renderTrainRoutes, 
    renderWallet,
    renderUserProfile} 
    from "../controllers/mainController.js";

const router = express.Router();

router.get('/', renderMainPage);
router.get('/trainRoutes', renderTrainRoutes);
router.get('/wallet', renderWallet);
router.get('/user-profile', renderUserProfile);


export default router;