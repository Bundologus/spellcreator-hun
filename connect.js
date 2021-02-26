import faker from "faker";
import Sequelize, { DataTypes } from "sequelize";
import UserModel from "./database/models/user";
import SpellModel from "./database/models/spell";
import BookModel from "./database/models/book";
import CharClassModel from "./database/models/charClass";
import UserSeeder from "./database/seeders/userSeeder";
// TODO rest of seeders

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER_ID,
    process.env.DB_USER_PWD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

try {
    await sequelize.authenticate();
    console.log("Databaseonnection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

//* Models

const User = UserModel(sequelize, DataTypes);
const Spell = SpellModel(sequelize, DataTypes);
const Book = BookModel(sequelize, DataTypes);
const CharClass = CharClassModel(sequelize, DataTypes);
const BookSpell = sequelize.define("book_spell", {});
const CharClassSpell = sequelize.define("charClass_spell", {});

//* Relationships

Spell.belongsToMany(Book, { through: BookSpell, unique: true });
Book.belongsToMany(Spell, { through: BookSpell, unique: true });
Spell.belongsToMany(CharClass, { through: CharClassSpell, unique: true });
CharClass.belongsToMany(Spell, { through: CharClassSpell, unique: true });

//* Migrating

sequelize
    .sync({ force: true })
    .then(() => {
        console.log("Migration done!");
    })
    .catch((err) => {
        throw err;
    });

//* Seeding
UserSeeder(sequelize, User, faker);
// TODO call rest of seeders

export default {
    User,
    Spell,
    Book,
    CharClass,
};
