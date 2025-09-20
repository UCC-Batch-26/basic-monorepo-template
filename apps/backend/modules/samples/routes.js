import { Router } from 'express';
import { addSample } from './controllers/add-sample.js';
import { getAllSamples } from './controllers/get-all-samples.js';

const router = new Router();

router.post('/', addSample);
router.get('/', getAllSamples);

export default router;
