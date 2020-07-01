const initialState = {
  countryList: [],
  selectedCountry: "",
  countryData: {},
};

const countryReducer = (state = initialState, action) => {
  console.log("GET_COUNTRY_LIST - reducer, action fired: ", action);
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      console.log("SET_COUNTRY_LIST - Reducer");
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
    case "SET_COUNTRY_DATA":
      console.log("SET_COUNTRY_DATA - reducer, action.payload", action.payload);
      return {
        ...state,
        countryData: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
