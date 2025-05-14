import { Request, Response } from 'express';
import Content from '../models/contentModel';

// Create new content
export const createContent = async (req: Request, res: Response) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all content
export const getAllContent = async (req: Request, res: Response) => {
    try {
        const contentList = await Content.find();
        res.status(200).json(contentList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get content by ID
export const getContentById = async (req: Request, res: Response) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update content by ID
export const updateContent = async (req: Request, res: Response) => {
    try {
        const content = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete content by ID
export const deleteContent = async (req: Request, res: Response) => {
    try {
        const content = await Content.findByIdAndDelete(req.params.id);
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};