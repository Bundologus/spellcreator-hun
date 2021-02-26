module.exports = (sequelize, DataTypes) => {
    return sequelize.define("book", {
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
        short_name: {
            tpye: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};
