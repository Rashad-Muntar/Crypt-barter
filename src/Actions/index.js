/* eslint-disable no-use-before-define, consistent-return, arrow-body-style */
import axios from 'axios';

export const fetchDataSuccessAction = (data) => ({
  type: 'FETCH-DATA',
  data,
});

export const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const selectedAction = (crypto) => ({
  type: 'SELECT_CRYPTO',
  crypto,
});

export const coinsFetcher = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=24');
    const coins = await response.data;
    dispatch(fetchDataSuccessAction(coins));
  } catch (error) {
    return error.message;
  }
};
