const seedAll = require('./all-seeds');



const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedAll();
    process.exit(0);
};

seedDatabase();