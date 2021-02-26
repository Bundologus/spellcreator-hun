module.exports = (sequelize, DataTypes) => {
    return sequelize.define("charClass", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        shortName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};
