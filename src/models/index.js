import { Sequelize, DataTypes } from 'sequelize';
import { DB, USER, PASSWORD, HOST, DIALECT } from '../config/db.config.js';
import admin from './admin.js';
import researchPaper from './researchPaper.js';
import workExperience from './workExperience.js';
import eventandactivities from './eventandactivities.js';


export const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: DIALECT,
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.Admin = admin(sequelize, DataTypes);
db.ResearchPaper = researchPaper(sequelize, DataTypes);
db.WorkExperience = workExperience(sequelize, DataTypes);
db.eventandactivities = eventandactivities(sequelize, DataTypes);

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







export default db;
