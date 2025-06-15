const { where } = require('sequelize');
const db = require('../models');
const crypto = require('crypto');
const { updateResearch } = require('./researchPaper');

const addWork = async (req, res) => {
    const {
        title,
        employmentType,
        company,
        startDate,
        endDate,
        experience,
        description,
        keyMilestones
    } = req.body;



    try {
        const workId = crypto.randomBytes(16).toString('hex');

        // Validate & parse date
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = (!endDate || endDate === "Present") ? null : new Date(endDate);

        if (
            isNaN(parsedStartDate.getTime()) ||
            (parsedEndDate !== null && isNaN(parsedEndDate.getTime()))
        ) {
            return res.status(400).json({ message: 'Invalid startDate or endDate format' });
        }

        const newWork = await db.WorkExperience.create({
            workExperienceId: workId,
            title,
            employmentType,
            company,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            experience,
            description,
            keyMilestones
        });

        // Respond with success
        return res.status(201).json({
            message: 'New work experience added successfully',
            workExperience: newWork
        });

    } catch (error) {
        console.error('Work creation error:', error);
        return res.status(500).json({
            error: 'An error occurred during work experience creation'
        });
    }
};



const fetchWork = async (req, res) => {
    try {
        const workExperience = await db.WorkExperience.findAll({
            attribute: ["title", "employmentType", "company", "startDate", "endDate", "description", "experience"]
        });

        return res.status(200).json({
            message: 'Work Experience fetched successfully',
            data: workExperience
        });
    } catch (error) {
        console.error('Error fetching work experience:', error);
        return res.status(500).json({
            error: 'An error occurred while fetching work experience'
        });
    }
}



const updateWork = async (req, res) => {
    try {
        const workId = req.params.workExperienceId;
        const {
            title,
            employmentType,
            company,
            startDate,
            endDate,
            description
        } = req.body;

        // Find the record
        const work = await db.WorkExperience.findOne({
            where: { workExperienceId: workId }
        });

        if (!work) {
            return res.status(404).json({ message: 'Work experience not found' });
        }

        // Validate & parse date
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = (!endDate || endDate === "Present") ? null : new Date(endDate);

        if (
            isNaN(parsedStartDate.getTime()) ||
            (parsedEndDate !== null && isNaN(parsedEndDate.getTime()))
        ) {
            return res.status(400).json({ message: 'Invalid startDate or endDate format' });
        }


        // Update using instance method
        await work.update({
            title,
            employmentType,
            company,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            description
        });

        return res.status(200).json({
            message: 'Work experience updated successfully',
            workExperience: work
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




module.exports = { addWork, fetchWork, updateWork };
