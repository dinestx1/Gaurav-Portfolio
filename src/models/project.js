const { Types } = require("mysql2")

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        projectID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        onWorking: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        }
    });

    return Project;
}
