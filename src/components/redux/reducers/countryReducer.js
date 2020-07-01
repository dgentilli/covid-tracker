const initialState = {
  countryList: [],
  selectedCountry: "Global",
};

export default function (state = initialState, action) {
  console.log("GET_COUNTRY_LIST - reducer, action fired: ", action);
  switch (action.type) {
    case "GET_COUNTRY_LIST":
      console.log("GET_COUNTRY_LIST - Reducer");
      return {
        ...state,
        countryList: action.payload,
      };
    case "SELECT_COUNTRY":
      console.log("SELECT_COUNTRY - reducer, action.payload: ", action.payload);
      return {
        //...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
}

export default countryReducer;
