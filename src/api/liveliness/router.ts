import { Request, Response, Router } from "express";

const livelinessRouter = Router();

const handleLiveliness = (req: Request, res: Response) => {};

livelinessRouter.get("/", handleLiveliness);
export default livelinessRouter;