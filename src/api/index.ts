import { Router } from "express";
import handleUniqueness from "./uniqueness/router";

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use("/uniqueness", handleUniqueness);
  return app;
};
