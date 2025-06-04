const db = require('../models');
const crypto = require('crypto');

const addResearch = async (req, res) => {
    try {
        const { title, publicationStatus, publicationDate, author, description, objective, thumbnail, openCollaboration } = req.body;

        if (!title || !author || !description || !objective || !openCollaboration || !publicationStatus || !publicationDate) {
            console.log("Please enter all details");
            return res.status(400).json({ error: 'Enter all details' });
        }


        const researchId = crypto.randomBytes(20).toString('hex');


        const newResearch = await db.ResearchPaper.create({
            paperId: researchId,
            title,
            publicationStatus,
            publicationDate,
            thumbnail,
            author,
            description,
            objective,
            openCollaboration
        });
        return res.status(200).json({
            message: 'New Research Work will be added',
            researchPaper: newResearch
        })
    } catch (error) {
        console.error('new reasearch creation error:', error);
        return res.status(500).json({
            error: 'An error occurred during creation'
        });
    }
}


const fetchResearch = async (req, res) => {
    try {
        const researchPapers = await db.ResearchPaper.findAll({
            attributes: ['paperId', 'publicationStatus', 'publicationDate','title', 'author', 'description', 'objective', 'thumbnail','openCollaboration', 'createdAt']
        });

        return res.status(200).json({
            message: 'Research papers fetched successfully',
            data: researchPapers
        });
    } catch (error) {
        console.error('Error fetching research papers:', error);
        return res.status(500).json({
            error: 'An error occurred while fetching research papers'
        });
    }
}


const updateResearch = async (req, res) => {
    try {
        const researchPaperId = req.params.researchId;

        const {
            title,
            publicationStatus,
            publicationDate,
            author,
            description,
            objective,
            thumbnail,
            openCollaboration
        } = req.body;


        const researchPaper = await db.ResearchPaper.findOne({
            where: { paperId: researchPaperId }
        });

        if (!researchPaper) {
            return res.status(404).json({ message: 'Research paper not found' });
        }

        // Update the research paper
        await researchPaper.update({
            title,
            publicationStatus,
            publicationDate,
            thumbnail,
            author,
            description,
            objective,
            openCollaboration
        });

        return res.status(200).json({
            message: 'Research paper updated successfully',
            researchPaper: researchPaper
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


const deleteResearch = async (req, res) => {
    const researchPaperId = req.params.researchId;

    try {
        const researchPaper = await db.ResearchPaper.findOne({
            where: { paperId: researchPaperId }
        });

        if (!researchPaper) {
            return res.status(404).json({ message: 'Research paper not found' });
        }

        await researchPaper.destroy(); // Delete the record

        return res.status(200).json({ message: 'Research paper deleted successfully' });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { addResearch, fetchResearch, updateResearch, deleteResearch};
