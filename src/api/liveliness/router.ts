import { Request, Response, Router } from "express";
import LoggerInstance from "../../loaders/logger";
import LivelinessCheck from "./controller";

const livelinessRouter = Router();

const handleLiveliness = async (req: Request, res: Response) => {
  try {
    const { image } = req.body;
    await LivelinessCheck(image);
    res.status(200).json({ success: true, message: "User is unique" });
  } catch (e) {
    console.log(e);
    LoggerInstance.error(e);
    res.status(e.status || 500).json({
      message: e.message || "Request Failed",
    });
  }
};

livelinessRouter.post("/", handleLiveliness);
export default livelinessRouter;
