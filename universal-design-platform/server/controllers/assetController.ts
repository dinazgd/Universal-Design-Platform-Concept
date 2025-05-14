import { Request, Response } from 'express';
import Asset from '../models/assetModel'; // Assuming you have an asset model

export const getAssets = async (req: Request, res: Response) => {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving assets', error });
    }
};

export const createAsset = async (req: Request, res: Response) => {
    const newAsset = new Asset(req.body);
    try {
        const savedAsset = await newAsset.save();
        res.status(201).json(savedAsset);
    } catch (error) {
        res.status(400).json({ message: 'Error creating asset', error });
    }
};

export const updateAsset = async (req: Request, res: Response) => {
    try {
        const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAsset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json(updatedAsset);
    } catch (error) {
        res.status(400).json({ message: 'Error updating asset', error });
    }
};

export const deleteAsset = async (req: Request, res: Response) => {
    try {
        const deletedAsset = await Asset.findByIdAndDelete(req.params.id);
        if (!deletedAsset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json({ message: 'Asset deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting asset', error });
    }
};