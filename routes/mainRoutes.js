import express from 'express';
import {renderMainPage, 
    renderTrainRoutes, 
    renderWallet,
    renderUserProfile,
    renderLogin,
    renderRegister,
    renderModals} 
    from "../controllers/mainController.js";

const router = express.Router();

router.get('/', renderMainPage);
router.get('/trainRoutes', renderTrainRoutes);
router.get('/wallet', renderWallet);
router.get('/user-profile', renderUserProfile);
router.get('/login', renderLogin);
router.get('/register', renderRegister);
router.get('/modals', renderModals);


export default router;