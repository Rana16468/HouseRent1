import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RentalCategory, TenantType } from "@/types/rental";

export const COST_MIN = 0;
export const COST_MAX = 150000;

export interface FilterState {
  searchTerm: string;
  country: "Bangladesh";
  division: string | null;
  district: string | null;
  thana: string | null;
  area: string | null;
  dateFrom: string | null;
  dateTo: string | null;
  availableDayStart: number;
  availableDayEnd: number;
  minCost: number;
  maxCost: number;
  category: RentalCategory | "all";
  tenantType: TenantType | "all";
}

export const initialFilterState: FilterState = {
  searchTerm: "",
  country: "Bangladesh",
  division: null,
  district: null,
  thana: null,
  area: null,
  dateFrom: null,
  dateTo: null,
  availableDayStart: 1,
  availableDayEnd: 31,
  minCost: COST_MIN,
  maxCost: COST_MAX,
  category: "all",
  tenantType: "all",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: initialFilterState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setDivision(state, action: PayloadAction<string | null>) {
      state.division = action.payload;
      state.district = null;
      state.thana = null;
      state.area = null;
    },
    setDistrict(state, action: PayloadAction<string | null>) {
      state.district = action.payload;
      state.thana = null;
      state.area = null;
    },
    setThana(state, action: PayloadAction<string | null>) {
      state.thana = action.payload;
      state.area = null;
    },
    setArea(state, action: PayloadAction<string | null>) {
      state.area = action.payload;
    },
    setDateFrom(state, action: PayloadAction<string | null>) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action: PayloadAction<string | null>) {
      state.dateTo = action.payload;
    },
    setAvailableDayRange(
      state,
      action: PayloadAction<{ start: number; end: number }>,
    ) {
      state.availableDayStart = action.payload.start;
      state.availableDayEnd = action.payload.end;
    },
    setCostRange(state, action: PayloadAction<{ min: number; max: number }>) {
      state.minCost = action.payload.min;
      state.maxCost = action.payload.max;
    },
    setCategory(state, action: PayloadAction<RentalCategory | "all">) {
      state.category = action.payload;
    },
    setTenantType(state, action: PayloadAction<TenantType | "all">) {
      state.tenantType = action.payload;
    },
    resetFilters() {
      return initialFilterState;
    },
  },
});

export const {
  setSearchTerm,
  setDivision,
  setDistrict,
  setThana,
  setArea,
  setDateFrom,
  setDateTo,
  setAvailableDayRange,
  setCostRange,
  setCategory,
  setTenantType,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
