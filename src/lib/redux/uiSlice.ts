import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  createPostOpen: boolean;
  detailsOpen: boolean;
  mobileFiltersOpen: boolean;
}

const initialState: UiState = {
  createPostOpen: false,
  detailsOpen: false,
  mobileFiltersOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCreatePost(state) {
      state.createPostOpen = true;
    },
    closeCreatePost(state) {
      state.createPostOpen = false;
    },
    openDetails(state) {
      state.detailsOpen = true;
    },
    closeDetails(state) {
      state.detailsOpen = false;
    },
    openMobileFilters(state) {
      state.mobileFiltersOpen = true;
    },
    closeMobileFilters(state) {
      state.mobileFiltersOpen = false;
    },
  },
});

export const {
  openCreatePost,
  closeCreatePost,
  openDetails,
  closeDetails,
  openMobileFilters,
  closeMobileFilters,
} = uiSlice.actions;

export default uiSlice.reducer;
