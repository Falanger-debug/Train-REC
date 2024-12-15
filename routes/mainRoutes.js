import express from 'express';
import {renderMainPage, renderTrainRoutes} from "../controllers/mainController.js";

const router = express.Router();

router.get('/', renderMainPage);
router.get('/trainRoutes', renderTrainRoutes);

export default router;