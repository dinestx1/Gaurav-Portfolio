export default (sequelize, DataTypes) => {
  return sequelize.define('ResearchPaper', {
    paperId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publicationStatus: {
      type: DataTypes.ENUM('draft', 'under_review', 'published', 'rejected'),
      allowNull: false,
      defaultValue: 'draft'
    },
    publicationDate: {
      type: DataTypes.DATE,
    },
    author: {
      type: DataTypes.JSON,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    objective: {
      type: DataTypes.JSON,
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    openCollaboration: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    partners: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []  // Ensures empty array if not provided
    },
    resources: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []  // Ensures empty array if not provided
    },
    startDate: {
      type: DataTypes.DATEONLY, // Stores date without time
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    isOngoing: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    requirements: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 100
      }
    },
    funding: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        secured: "₹0",
        needed: "₹0"
      }
    }
  });
};
