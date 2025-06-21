import { where } from 'sequelize';
import db from '../models/index.js';
import { randomBytes } from 'crypto';


export const addWork = async (req, res) => {
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
        const workId = randomBytes(16).toString('hex');

        const newWork = await db.WorkExperience.create({
            workExperienceId: workId,
            title,
            employmentType,
            company,
            startDate,
            endDate,
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



export const fetchWork = async (req, res) => {
    try {
      const workExperienceRaw = await db.WorkExperience.findAll({
        attributes: ["title", "employmentType", "company", "startDate", "endDate", "description", "experience","keyMilestones"]
      });
  
      // Normalize stringified JSON fields if any
      const workExperience = workExperienceRaw.map((work) => {
        const obj = work.toJSON();
  
        for (const key in obj) {
          if (typeof obj[key] === 'string') {
            const value = obj[key].trim();
            if (
              (value.startsWith('{') && value.endsWith('}')) ||
              (value.startsWith('[') && value.endsWith(']'))
            ) {
              try {
                obj[key] = JSON.parse(value);
              } catch (err) {
                // Leave value unchanged if parsing fails
              }
            }
          }
        }
  
        return obj;
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
  




export const updateWork = async (req, res) => {
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



