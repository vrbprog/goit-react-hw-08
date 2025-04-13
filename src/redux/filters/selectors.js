import { filtersSlice } from "./slice";

export const { changeFilter } = filtersSlice.actions;
export const selectFilters = (state) => state.filters.name;
