import axios from "axios";
import { config } from "../config/app.config";

export const fetchedCatFact = async (): Promise<string> => {
  try {
    const response = await axios.get(config.catFactApi, { timeout: 5000 });
    console.log("Successfully fetched cat fact");
    return response.data.fact;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error("Cat Facts API timeout");
      } else if (error.response) {
        console.error(`Cat Facts API error: ${error.response.status}`);
      } else if (error.request) {
        console.error("Cat Facts API: No response received");
      } else {
        console.error("Cat Facts API error:", error.message);
      }
    } else {
      console.error("Unexpected error fetching cat fact:", error);
    }

    return "Could not fetch cat fact at this time. Please try again later.";
  }
};
