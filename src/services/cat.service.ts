import axios from "axios";
import { config } from "@/config/app.config";

export const fetchedCatFact = async (): Promise<string> => {
  try {
    const response = await axios.get(config.catFactApi, { timeout: 5000 });
    console.log("Successfully fetched cat fact");
    return response.data.fact;
  } catch (error: any) {
    console.log("Error fetching cat fact:", error.message);
    return "Could not fetch cat fact at this time. Please try again later.";
  }
};
