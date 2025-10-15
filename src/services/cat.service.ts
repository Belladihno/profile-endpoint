import axios from "axios";
import { config } from "@/config/app.config";

export const fetchedCatFact = async (): Promise<string> => {
  try {
    const response = await axios.get(config.catFactApi, { timeout: 3000 });
    return response.data.fact;
  } catch (error: any) {
    console.log("Error fecthing cat fact:", error.message);
    return "Could not fetch cat fact at this time. Please try again later.";
  }
};
