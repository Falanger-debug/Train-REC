import express from 'express';
import {renderMainPage, 
    renderTrainRoutes, 
    renderWallet,
    renderUserProfile,
    renderLogin,
    renderRegister,
    renderModals,
    searchConnections,
    renderBuyTicket,
    renderSummary} 
    from "../controllers/mainController.js";

const router = express.Router();

router.get('/', renderMainPage);
router.get('/trainRoutes', renderTrainRoutes);
router.get('/wallet', renderWallet);
router.get('/user-profile', renderUserProfile);
router.get('/login', renderLogin);
router.get('/register', renderRegister);
router.get('/modals', renderModals);
router.post('/search-connection', searchConnections);
router.get('/buy-ticket', renderBuyTicket);
router.get('/summary', renderSummary);

export default router;