import config from "../../config";
import AiApi from "../../helper/axios";
import ErrorClass from "../../helper/types/error";
const LivelinessCheck = async (img: any) => {
  const body = {
    os: "desktop",
    image: img,
  };
  const response = await AiApi.post("/liveliness", body);
  console.log(response.data);
  if (response.data.liveliness_score !== 0 && response.data.liveliness_score) {
    throw new ErrorClass("Spoof User", 400);
  }
  return response;
};

export default LivelinessCheck;
