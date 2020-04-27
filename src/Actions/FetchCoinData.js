import axios from "axios";
import { apiBaseUrl } from "../../constants/api";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from "../../constants/ActionTypes";
export default function FetchCoinData() {
  return (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios
      .get(`${apiBaseUrl}&api_key=52ba569d67cc8c61805430801bbb503b769db30521b43816028f823b96cebb9d`)
      .then((res) => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
}
