import { Router } from "express";
import handleUniqueness from "./uniqueness/router";
import handleLiveliness from "./liveliness/router";

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use("/uniqueness", handleUniqueness);
  app.use("/liveliness", handleLiveliness);
  return app;
};
