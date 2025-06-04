module.export = (sequelize, DataTypes) => {
    const EntrepreneurialJourney = sequelize.define({
        bio:{
            type: DataTypes.TEXT
        },

        project:[{
            
        }]
    })
}
