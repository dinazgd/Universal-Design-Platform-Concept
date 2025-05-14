import express from 'express';
import assetController from '../controllers/assetController';
import contentController from '../controllers/contentController';
import platformController from '../controllers/platformController';

const router = express.Router();

// Asset routes
router.get('/assets', assetController.getAllAssets);
router.post('/assets', assetController.createAsset);
router.delete('/assets/:id', assetController.deleteAsset);

// Content routes
router.get('/content', contentController.getAllContent);
router.post('/content', contentController.createContent);
router.put('/content/:id', contentController.updateContent);
router.delete('/content/:id', contentController.deleteContent);

// Platform routes
router.get('/platforms', platformController.getAllPlatforms);
router.post('/platforms', platformController.createPlatform);

export default router;