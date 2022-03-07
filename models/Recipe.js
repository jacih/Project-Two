const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT(),
    },
    ingredients: {
      type: DataTypes.TEXT(),
      // allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT(),
      // allowNull: false
    },
    image: {
      type: DataTypes.TEXT(),
    },
    recipe_link: {
      type: DataTypes.TEXT()
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;