import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Genre = sequelize.define(
  "genre",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Genre;
