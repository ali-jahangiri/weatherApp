//action type
const SET_CITY = "SET_CITY";
const CHENGE_CITY = "CHENGE_CITY";
const currentCityReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CITY:
      return [...state, action.payload];
    case CHENGE_CITY:
      return state.filter((el) => !el);
    default:
      return state;
  }
};

export const setCityCreator = (payload) => ({ type: SET_CITY, payload });
export const changeCityCreator = () => ({ type: CHENGE_CITY });
export default currentCityReducer;
