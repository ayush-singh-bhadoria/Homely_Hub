import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./Property/property-slice";
import propertiesDetailsSlice from "./PropertyDetails/propertyDetails-slice";
import userSlice from "./User/user-slice";
const store = configureStore({
    reducer:{
        properties: propertySlice.reducer,
        propertyDetails: propertiesDetailsSlice.reducer,
        user: userSlice.reducer
    }
})
export default store;