const initialState = {
  countryList: [],
  selectedCountry: "Worldwide",
  //countryData: {}, //{}
  // countryData: {
  //   Global: {
  //     NewConfirmed: 218425,
  //     TotalConfirmed: 10799627,
  //     NewDeaths: 4985,
  //     TotalDeaths: 524871,
  //     NewRecovered: 127189,
  //     TotalRecovered: 5479743,
  //   },
  //   Countries: [
  //     {
  //       Country: "Afghanistan",
  //       CountryCode: "AF",
  //       Slug: "afghanistan",
  //       NewConfirmed: 319,
  //       TotalConfirmed: 31836,
  //       NewDeaths: 28,
  //       TotalDeaths: 774,
  //       NewRecovered: 1520,
  //       TotalRecovered: 15651,
  //       Date: "2020-07-02T11:49:53Z",
  //     },
  //     {
  //       Country: "Albania",
  //       CountryCode: "AL",
  //       Slug: "albania",
  //       NewConfirmed: 45,
  //       TotalConfirmed: 2580,
  //       NewDeaths: 3,
  //       TotalDeaths: 65,
  //       NewRecovered: 57,
  //       TotalRecovered: 1516,
  //       Date: "2020-07-02T11:49:53Z",
  //     },
  //     {
  //       Country: "Algeria",
  //       CountryCode: "DZ",
  //       Slug: "algeria",
  //       NewConfirmed: 365,
  //       TotalConfirmed: 14272,
  //       NewDeaths: 8,
  //       TotalDeaths: 920,
  //       NewRecovered: 143,
  //       TotalRecovered: 10040,
  //       Date: "2020-07-02T11:49:53Z",
  //     },
  //   ],
  // },
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
