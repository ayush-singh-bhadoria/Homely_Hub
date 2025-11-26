import { createSlice } from "@reduxjs/toolkit";

const propertiesDetailsSlice = createSlice({
  name: "PropertyDetails",
  initialState: {
    propertyDetails: null,
    loading: false,
    error: null
  },
  reducers: {
    getListRequest(state) {
      state.loading = true
    },
    getPropertyDetails(state, action) {
      state.propertyDetails = action.payload;
      state.loading = false;
    },
    getErrors(state, action) {
      state.error = action.payload;
      state.loading = false
    }
  }
})

export const propertyDetailsAction = propertiesDetailsSlice.actions
export default propertiesDetailsSlice 
