import { useEffect, useReducer } from "react";

import key from "../apiKey";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
//action type
const GET_DATA = "GET_DATE";
const DATA_FAIL = "DATA_FAIL";
const LOADING = "LOADING";

//action creator
const getDataCreator = (payload) => ({ type: GET_DATA, payload });
const dataFailCreator = (payload) => ({ type: DATA_FAIL, payload });
const loading = () => ({ type: LOADING });

const INIT = {
  response: [],
  loading: false,
  error: null,
};

const fetchReducer = (state = INIT, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        error: null,
        loading: false,
        response: action.payload,
      };
    case DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

const useFetch = (value) => {
  const [state, dispatch] = useReducer(fetchReducer, INIT);
  useEffect(() => {
    if (value) {
      dispatch(loading());
      fetch(`${baseUrl}${value}${key}`)
        .then((res) => res.json())
        .then((data) =>
          data.cod !== "200"
            ? dispatch(dataFailCreator(data.message))
            : dispatch(getDataCreator(data))
        );
    }
  }, [value]);
  return state;
};

export default useFetch;
