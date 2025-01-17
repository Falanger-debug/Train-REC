import express from 'express';
import {
    renderMainPage,
    renderTrainRoutes,
    renderWallet,
    renderUserProfile,
    renderLogin,
    renderRegister,
    renderModals,
    searchConnections,
    renderBuyTicket,
    renderSummary, renderSeatChoicePanel
}
    from "../controllers/mainController.js";

const router = express.Router();

router.get('/', renderMainPage);
router.get('/trainRoutes', renderTrainRoutes);
router.get('/wallet', renderWallet);
router.get('/userProfile', renderUserProfile);
router.get('/login', renderLogin);
router.get('/register', renderRegister);
router.get('/modals', renderModals);
router.post('/searchConnections', searchConnections);
router.get('/buyTicket', renderBuyTicket);
router.get('/summary', renderSummary);
router.get('/seatChoice', renderSeatChoicePanel);

export default router;