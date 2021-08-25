
import axios from 'axios';

export const fetchDataSuccessAction = (data) => ({
  type: 'FETCH-DATA',
  data,
});

export const filterAction = (data) => ({
  type: 'DATA-FILTER',
  data
});



export const coinsFetcher = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
    const coins = await response.data;
    dispatch(fetchDataSuccessAction(coins));
  } catch (error) {
    console.log(error.message);
  }
};
