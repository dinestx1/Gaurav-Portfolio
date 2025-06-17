import { differenceInMonths } from 'date-fns';

export default (sequelize, DataTypes) => {
    const WorkExperience = sequelize.define('WorkExperience', {
        workExperienceId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employmentType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        icon: {
  type: DataTypes.STRING, // Store icon name as string (e.g., "FiBook")
  allowNull: true
},
        endDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        experience: {
            type: DataTypes.JSON,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        keyMilestones: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []  // Ensures it's an empty array if not provided
        }
    });

    WorkExperience.beforeSave((workExp) => {
        const start = new Date(workExp.startDate);
        const end = workExp.endDate ? new Date(workExp.endDate) : new Date(); // current date if ongoing

        const totalMonths = differenceInMonths(end, start);
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        workExp.experience = { years, months };
    });

    return WorkExperience;
};
