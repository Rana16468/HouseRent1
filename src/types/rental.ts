export type RentalCategory =
  | "house_flat"
  | "sublet_room"
  | "mess"
  | "office";

export type TenantType = "family" | "bachelor_male" | "bachelor_female" | "office";

export type GasType = "line" | "lpg" | "included";
export type ElectricityType = "prepaid" | "postpaid" | "included";

export interface UtilityBreakdown {
  baseRent: number;
  gas: number;
  gasType: GasType;
  electricity: number;
  electricityType: ElectricityType;
  water: number;
  serviceCharge: number;
}

export interface ContactChannels {
  phone: string;
  whatsapp: boolean;
  telegram: boolean;
  teams: boolean;
  imo: boolean;
  telegramHandle?: string;
  teamsLink?: string;
}

export interface Location {
  division: string;
  district: string;
  thana: string;
  area: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  category: RentalCategory;
  tenantType: TenantType;
  location: Location;
  utilities: UtilityBreakdown;
  images: string[];
  contact: ContactChannels;
  availableFrom: string;
  createdAt: string;
  pin: string;
  source: "mock" | "user";
  featured?: boolean;
}

export interface ThanaNode {
  name: string;
  areas: string[];
}

export interface DistrictNode {
  name: string;
  thanas: ThanaNode[];
}

export interface DivisionNode {
  name: string;
  districts: DistrictNode[];
}

export const CATEGORY_LABEL: Record<RentalCategory, string> = {
  house_flat: "House / Flat",
  sublet_room: "Sublet / Single room",
  mess: "Mess",
  office: "Office / Commercial",
};

export const TENANT_LABEL: Record<TenantType, string> = {
  family: "Family",
  bachelor_male: "Bachelor (Male)",
  bachelor_female: "Bachelor (Female)",
 office:   "office"

};

export const GAS_LABEL: Record<GasType, string> = {
  line: "Line gas",
  lpg: "LPG cylinder",
  included: "Included",
};

export const ELECTRICITY_LABEL: Record<ElectricityType, string> = {
  prepaid: "Prepaid",
  postpaid: "Postpaid",
  included: "Included",
};

export function totalMonthlyCost(utilities: UtilityBreakdown): number {
  const gas = utilities.gasType === "included" ? 0 : utilities.gas;
  const electricity =
    utilities.electricityType === "included" ? 0 : utilities.electricity;
  return (
    utilities.baseRent +
    gas +
    electricity +
    utilities.water +
    utilities.serviceCharge
  );
}

export function digitsPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}
