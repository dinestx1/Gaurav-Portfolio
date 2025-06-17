import db from '../models/index.js';

export  const addEventActivity = async (req, res) => {
    try {
      const {
        eventType,
        title,
        date,
        description,
        location,
        organizer,
        status,
        thumbnail
      } = req.body;
  
      const newEvent = await db.eventandactivities.create({
        eventType,
        title,
        date,
        description,
        location,
        organizer,
        status,
        thumbnail
      });
  
      return res.status(201).json({
        message: "Event/Activity created successfully",
        data: newEvent
      });
    } catch (error) {
      console.error("Add Event Error:", error);
      return res.status(500).json({ message: "Failed to create event", error });
    }
  };


  export  const getAllEventActivities = async (req, res) => {
    try {
      const events = await db.eventandactivities.findAll({
        order: [['date', 'DESC']]
      });
  
      return res.status(200).json({
        message: "Events fetched successfully",
        data: events
      });
    } catch (error) {
      console.error("Fetch Events Error:", error);
      return res.status(500).json({ message: "Failed to fetch events", error });
    }
  };





 

