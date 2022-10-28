'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class Films extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Films.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    title: DataTypes.STRING,
    original_title: DataTypes.STRING,
    original_title_romanised: DataTypes.STRING,
    image_url: DataTypes.STRING,
    movie_banner_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    release_date: DataTypes.STRING,
    running_time: DataTypes.STRING,
    rate_score: DataTypes.STRING,
    people: DataTypes.JSON,
    species: DataTypes.JSON,
    locations: DataTypes.JSON,
    vehicles: DataTypes.JSON,
    url_destination: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Films',
  });
  return Films;
};