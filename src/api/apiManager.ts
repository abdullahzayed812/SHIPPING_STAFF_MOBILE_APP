import { ApiMethod } from "./apiMethods";
import { ENDPOINTS } from "./endPoints";

export class ApiManager {
  static async login<T>(data: T): Promise<any> {
    const URL = ENDPOINTS.LOGIN();
    return await ApiMethod.post(URL, data);
  }

  static async getShipmentDetails(awb: string): Promise<any> {
    const URL = ENDPOINTS.SHIPMENT_DETAILS();
    return await ApiMethod.get(URL, { awb });
  }

  static async updateShipmentDimensions<T>(data: T): Promise<any> {
    const URL = ENDPOINTS.UPDATE_SHIPMENT_DIMENSIONS();
    return await ApiMethod.post(URL, data);
  }

  static async getShipmentDimensions(awb: string): Promise<any> {
    const URL = ENDPOINTS.SHIPMENT_DIMENSIONS();
    return await ApiMethod.get(URL, { awb });
  }
}
