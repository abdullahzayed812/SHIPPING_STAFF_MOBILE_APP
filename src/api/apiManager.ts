import { ShipmentToUpdateType } from "../screens/AppendToDrsScreen";
import { UpdateShipmentStatusRequestData } from "../screens/UpdateShipmentStatusScreen";
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

  static async getRoutes(): Promise<any> {
    const URL = ENDPOINTS.ROUTES();
    return await ApiMethod.get(URL);
  }

  static async getDriversName(route_id: number): Promise<any> {
    const URL = ENDPOINTS.DRIVERS();
    return await ApiMethod.get(URL, { route_id });
  }

  static async getDrsNames(messenger_id: number): Promise<any> {
    const URL = ENDPOINTS.DRS();
    return await ApiMethod.get(URL, { messenger_id });
  }

  static async appendShipmentToDRS(data: ShipmentToUpdateType): Promise<any> {
    const URL = ENDPOINTS.APPEND_SHIPMENT_TO_DRS();
    return await ApiMethod.post(URL, data);
  }

  static async updateShipmentStatus(data: UpdateShipmentStatusRequestData): Promise<any> {
    const URL = ENDPOINTS.UPDATE_SHIPMENT_STATUS();
    return await ApiMethod.post(URL, data);
  }
}
