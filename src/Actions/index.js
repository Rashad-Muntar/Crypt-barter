import axios from 'axios';

export const fetchDataSuccessAction = (data) => ({
  type: 'FETCH-DATA',
  data,
});

export const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const coinsFetcher = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10');
    const coins = await response.data;
    dispatch(fetchDataSuccessAction(coins));
  } catch (error) {
    console.log(error.message);
  }
};
