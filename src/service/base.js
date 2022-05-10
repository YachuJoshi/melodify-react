import axios from "axios";
import { CMS_BASE_URL } from "../config";

export const cms = axios.create({
  baseURL: CMS_BASE_URL,
});
