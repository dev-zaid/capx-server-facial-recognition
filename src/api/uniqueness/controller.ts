import config from "../../config";
import AiApi from "../../helper/axios";
import ErrorClass from "../../helper/types/error";
const UniquenessCheck = async (img: any) => {
  const body = {
    collection_id: config.seventhSense.userCollectionID,
    images: [img],
    min_score: 0.7,
    search_mode: "ACCURATE",
  };
  const response = await AiApi.post("/search", body);
  console.log(response.data);
  if (response.data.length !== 0) {
    throw new ErrorClass("User already exists", 400);
  }
  return response;
};

export default UniquenessCheck;
