const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.Admin = require('./admin')(sequelize, DataTypes);
db.ResearchPaper = require('./researchPaper')(sequelize, DataTypes);
db.WorkExperience = require('./workExperience')(sequelize, DataTypes);
db.Project = require('./project')(sequelize, DataTypes);


// Admin
// Admin.hasOne(Admin, { foreignKey: 'adminId' });
// Admin.belongsTo(Admin, { foreignKey: 'adminId' });


// Set up associations AFTER both models are defined
db.Admin.hasMany(db.ResearchPaper, {
  foreignKey: 'adminId',
  as: 'papers'
});

db.ResearchPaper.belongsTo(db.Admin, {
  foreignKey: 'adminId',
  as: 'admin'
});

// WorkExperience relation ✅
db.Admin.hasMany(db.WorkExperience, {
  foreignKey: 'adminId',
  as: 'workExperiences'
});
db.WorkExperience.belongsTo(db.Admin, {
  foreignKey: 'adminId',
  as: 'admin'
});

// Project relation ✅
db.Admin.hasMany(db.Admin, {
  foreignKey: 'adminId',
  as: 'Project'
});

db.Project.belongsTo(db.Admin, {
  foreignKey: 'adminId',
  as: 'admin'
})

module.exports = db;
