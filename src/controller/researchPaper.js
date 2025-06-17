import db from '../models/index.js';
import { randomBytes } from 'crypto';

export const addResearch = async (req, res) => {
    try {
      const {
        title,
        publicationStatus,
        publicationDate,
        author,
        description,
        objective,
        thumbnail,
        openCollaboration,
        partners,
        resources,
        startDate,
        endDate,
        isOngoing,
        requirements,
        contact,
        progress,
        funding
      } = req.body;
  
      // Required fields check
     
  
      const researchId = randomBytes(20).toString('hex');
  
      const newResearch = await db.ResearchPaper.create({
        paperId: researchId,
        title,
        publicationStatus,
        publicationDate,
        thumbnail,
        author,
        description,
        objective,
        openCollaboration,
        partners: partners || [],
        resources: resources || [],
        startDate,
        endDate,
        isOngoing,
        requirements: requirements || [],
        contact,
        progress,
        funding: funding || { secured: "₹0", needed: "₹0" }
      });
  
      return res.status(200).json({
        message: 'New research work has been added',
        researchPaper: newResearch
      });
  
    } catch (error) {
      console.error('New research creation error:', error);
      return res.status(500).json({
        error: 'An error occurred during creation'
      });
    }
  };


  export const fetchResearch = async (req, res) => {
    try {
        const researchPapers = await db.ResearchPaper.findAll();

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



export const fetchResearchByid = async (req, res) => {
    try {
        const { id } = req.params;
        
        const researchPaper = await db.ResearchPaper.findByPk(id);
        
        if (!researchPaper) {
            return res.status(404).json({
                error: 'Research paper not found'
            });
        }

        return res.status(200).json({
            message: 'Research paper fetched successfully',
            data: researchPaper
        });
    } catch (error) {
        console.error('Error fetching research paper:', error);
        return res.status(500).json({
            error: 'An error occurred while fetching the research paper'
        });
    }
};


export const updateResearch = async (req, res) => {
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


export const deleteResearch = async (req, res) => {
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


