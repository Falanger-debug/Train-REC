import express from 'express';
import {
    renderMainPage,
    renderTrainRoutes,
    renderWallet,
    renderUserProfile,
    renderLogin,
    loginUser,
    logoutUser,
    renderRegister,
    registerUser,
    renderModals,
    searchConnections,
    renderBuyTicket,
    renderSummary,
    renderSeatChoicePanel,
    renderPayForTicket
}
    from "../controllers/mainController.js";

const router = express.Router();

router.get('/', renderMainPage);
router.get('/trainRoutes', renderTrainRoutes);
router.get('/wallet', renderWallet);
router.get('/userProfile', renderUserProfile);
router.get('/login', renderLogin);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/register', renderRegister);
router.post('/register', registerUser);
router.get('/modals', renderModals);
router.post('/searchConnections', searchConnections);
router.get('/buyTicket', renderBuyTicket);
router.get('/summary', renderSummary);
router.get('/seatChoice', renderSeatChoicePanel);
router.get('/payment', renderPayForTicket);


export default router;