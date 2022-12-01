import axios from "axios";

export const getListOfChickens = async () => {
  try {
    const response = await axios.get("chicken");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getChickenById = async (id) => {
  // ## TODO Call to web api
  if (id) {
    try {
      const response = await axios.get(`chicken/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
