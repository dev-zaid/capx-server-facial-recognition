import { Request, Response, Router } from "express";
import LoggerInstance from "../../loaders/logger";
import UniquenessCheck from "./controller";

const uniquenessRouter = Router();

const handleUniqueness = async (req: Request, res: Response) => {
  try {
    const { image } = req.body;
    await UniquenessCheck(image);
    res.status(200).json({ success: true, message: "User is unique" });
  } catch (e) {
    LoggerInstance.error(e);
    res.status(e.status || 500).json({
      message: e.message || "Request Failed",
    });
  }
};

uniquenessRouter.post("/", handleUniqueness);
export default uniquenessRouter;
