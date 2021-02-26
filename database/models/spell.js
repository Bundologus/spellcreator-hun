module.exports = (sequelize, DataTypes) => {
    return sequelize.define("spell", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        school: {
            type: DataTypes.ENUM,
            values: [
                "Abjuration",
                "Conjuration",
                "Divination",
                "Enchantment",
                "Evocation",
                "Illusion",
                "Necromancy",
                "Transmutation",
            ],
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        casting_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        range: {
            type: DataTypes.STRING,
        },
        components: {
            type: DataTypes.STRING,
            defaultValue: "none",
        },
        duration: DataTypes.STRING,
        description: DataTypes.TEXT,
        description_high: DataTypes.TEXT,
        note: DataTypes.TEXT,
        concentration: DataTypes.INTEGER,
        ritual: DataTypes.INTEGER,
        sound: DataTypes.STRING,
    });
};
