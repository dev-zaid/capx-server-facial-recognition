import { Request, Response, Router } from "express";
import AI from "../../config/AI";

const uniquenessRouter = Router();

const headers = {
  "X-API-Key": process.env.API_KEY,
};

const handleUniqueness = async(req: Request, res: Response) => {
  const { image } = req.body;
  const body = {
    collection_id: "68110664-ab19-4227-9d35-961197efc88d",
    images: [image],
    min_score: 0.7,
    search_mode: "FAST",
  };
  const response = await AI.post("/search", body, { headers });
  if (!response) {
    return res.status(200).send("Image is unique!");
  }
};

uniquenessRouter.post("/uniqueness", handleUniqueness);
export default uniquenessRouter;
