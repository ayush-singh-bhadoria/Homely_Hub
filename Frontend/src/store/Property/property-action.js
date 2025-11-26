// src/store/Property/property-action.js
import { propertyAction } from "./property-slice";
import { axiosInstance } from "../../utils/axios";

export const getAllProperties = () => async (dispatch, getState) => {
  try {
    dispatch(propertyAction.getRequest());

    const { searchParams } = getState().properties;

    const response = await axiosInstance.get("/v1/rent/listing", {
      params: { ...searchParams },
    });

    console.log("LISTING RAW RESPONSE:", response.data); // keep this for now

    if (!response || !response.data) {
      throw new Error("Could not fetch any properties");
    }

    // response.data is that big object with { status, no_of_responses, all_properties, data }
    dispatch(propertyAction.getProperties(response.data));
  } catch (error) {
    console.log(
      "getAllProperties error:",
      error?.response?.data || error.message
    );
    dispatch(propertyAction.getErrors(error.message));
  }
};
