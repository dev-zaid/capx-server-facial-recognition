import { Request, Response, Router } from "express";

const uniquenessRouter = Router();

const handleUniqueness = (req: Request, res: Response) => {};

uniquenessRouter.get("/", handleUniqueness);
export default uniquenessRouter;