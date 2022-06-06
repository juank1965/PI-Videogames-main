import "dotenv/config";
import app from "./src/app.js";
import sequelize from "./src/db.js";

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
});
