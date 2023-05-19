require("dotenv").config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  /**
   * Port the app should run on
   */
  port: parseInt(process.env.PORT!) || 5050,

  seventhSense: {
    apiKey: process.env.API_KEY,
    baseURL: process.env.API_BASE_URL,
    userCollectionID: "ac98fe31-98b7-4ff4-81c6-56a7ee7a6230",
  },

  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  /**
   * API configs
   */
  api: {
    prefix: "/api",
  },
};
