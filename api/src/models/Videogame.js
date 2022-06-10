import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Videogame = sequelize.define(
  "videogame",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background_image: {
      type: DataTypes.TEXT,
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default Videogame;
