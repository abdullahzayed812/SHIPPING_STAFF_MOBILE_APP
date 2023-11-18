import { ApiMethod } from "./apiMethods";
import { ENDPOINTS } from "./endPoints";

export class ApiManager {
  static async login<T>(data: T): Promise<any> {
    const URL = ENDPOINTS.LOGIN();
    return await ApiMethod.post(URL, data);
  }
}
