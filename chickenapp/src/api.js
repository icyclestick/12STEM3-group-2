import axios from "axios";

export const createChicken = async (chickenData) => {
  try {
    const response = await axios.post(`chicken/add`, chickenData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editChickenData = async (id, newchickenData) => {
  try {
    const response = await axios.post(`chicken/update/${id}`, newchickenData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
    console.log(id);
    try {
      const response = await axios.get(`chicken/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export const deleteChickenApi = async (id) => {
  if (id) {
    try {
      const response = await axios.delete(`chicken/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export const createUserApi = async (user) => {
  try {
    const response = await axios.post(`users/add`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};
