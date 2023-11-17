import { ApiMethods } from "./apiMethods";
import { ENDPOINTS } from "./endPoints";

export class ApiManager {
  static async login<T>(data: T): Promise<void> {
    const URL = ENDPOINTS.LOGIN();
    return ApiMethods.post(URL, data);
  }
}
