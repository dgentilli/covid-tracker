export const getCountryList = () => ({
  type: "GET_COUNTRY_LIST",
});

export const selectCountry = (data) => ({
  type: "SELECT_COUNTRY",
  payload: data,
});
