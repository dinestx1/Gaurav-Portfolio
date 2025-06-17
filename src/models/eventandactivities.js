export default (sequelize, DataTypes) => {
    return sequelize.define('EventActivity', {
      eventId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      eventType: {
        type: DataTypes.ENUM('workshop', 'seminar','award','collaboration', 'conference', 'webinar', 'meeting', 'networking', 'other'),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      // Additional useful fields
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      organizer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('upcoming', 'ongoing', 'completed', 'cancelled'),
        defaultValue: 'upcoming'
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  };