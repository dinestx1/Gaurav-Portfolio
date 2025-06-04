module.exports = (sequelize, DataTypes) => {
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
    }
  });
};
