/**
 * Details on the API documenation can be found in the References section of
 * the README.md file for this project.
 */

const BASE_URL = "https://api.covid19api.com";

export const getSummary = async () => {
  try {
    const response = await fetch(`${BASE_URL}/summary`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Something went wrong. Please try again in a few minutes. ${error}`
    );
  }
};

export const getCountryList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/countries`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Cannot get country list. Please try again in a few minutes. ${error}`
    );
  }
};
