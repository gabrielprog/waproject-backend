'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      original_title: {
        type: Sequelize.STRING
      },
      original_title_romanised: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      movie_banner_url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      director: {
        type: Sequelize.STRING
      },
      producer: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      running_time: {
        type: Sequelize.STRING
      },
      rate_score: {
        type: Sequelize.STRING
      },
      people: {
        type: Sequelize.JSON
      },
      species: {
        type: Sequelize.JSON
      },
      locations: {
        type: Sequelize.JSON
      },
      vehicles: {
        type: Sequelize.JSON
      },
      url_destination: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Films');
  }
};