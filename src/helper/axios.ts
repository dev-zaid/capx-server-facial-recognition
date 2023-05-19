import axios from "axios";
import config from "../config";

export default axios.create({
  baseURL: config.seventhSense.baseURL,
  headers: { "X-API-Key": config.seventhSense.apiKey },
});
