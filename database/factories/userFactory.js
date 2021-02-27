export default (faker, User) => {
    return User.Create({
        name: faker.internet.userName(),
        email: faker.internet.email(),
    });
};
