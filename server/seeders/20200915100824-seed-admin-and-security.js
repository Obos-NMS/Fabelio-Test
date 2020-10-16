'use strict';

const { hashPassword } = require('../helpers/bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('Users', [
    {
      name: "admin",
      email: "admin@mail.com",
      password: hashPassword('admin'),
      role: "admin",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ])
},

down: async (queryInterface, Sequelize) => {
  return await queryInterface.bulkDelete('Users', null, {})
}
};
