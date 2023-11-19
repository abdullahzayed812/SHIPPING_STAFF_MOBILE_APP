import axios from "axios";
import { store } from "../app/store";
import { loadToken } from "../utils/storage";

const BASE_URL = "https://postagexp.com/staff/app/api/v1";

async function getHeaders(): Promise<{ [index: string]: string }> {
  const APP_KEY = "";

  const TOKEN = await loadToken();

  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
    APP_KEY: APP_KEY,
  };
}

export class ApiMethod {
  static async apiRequest<T>(method: string, URL: string, body?: T): Promise<void> {
    const url = BASE_URL + URL;
    try {
      const response = await axios(url, {
        method,
        data: method === "POST" ? body : null,
        params: method === "GET" ? body : null,
        headers: await getHeaders(),
      });
      const data = await response?.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async get(url: string, data?: any): Promise<void> {
    return this.apiRequest("GET", url, data);
  }

  static async post<T>(url: string, data: T): Promise<void> {
    return this.apiRequest("POST", url, data);
  }

  static async put<T>(url: string, data: T): Promise<void> {
    return this.apiRequest("PUT", url, data);
  }

  static async delete<T>(url: string, data: T): Promise<void> {
    return this.apiRequest("DELETE", url, data);
  }
}
