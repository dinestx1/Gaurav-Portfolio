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
db.eventandactivities = require('./eventandactivities')(sequelize, DataTypes);


// Admin
// Admin.hasOne(Admin, { foreignKey: 'adminId' });
// Admin.belongsTo(Admin, { foreignKey: 'adminId' });


// Research Paper relation
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

// Event Activity relation
db.Admin.hasMany(db.eventandactivities,{
  foreignKey: 'adminId',
  as: 'Activity'
});
db.eventandactivities.belongsTo(db.Admin,{
  foreignKey: 'adminId',
  as: 'admin'
})







module.exports = db;
