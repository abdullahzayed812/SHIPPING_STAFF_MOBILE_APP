import { store } from "../app/store";

const BASE_URL = "https://postagexp.com/staff/app/api/v1";

function getToken() {}

function getHeaders(): { [index: string]: string } {
  const APP_KEY = "";

  const TOKEN = getToken();

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
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: getHeaders(),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async get(url: string): Promise<void> {
    return this.apiRequest("GET", url);
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
