/* eslint-disable consistent-return */
import axios from 'axios';

// export const fetchDataAction = () => ({
//   type: 'FETCHING-DATA',
// });

export const fetchDataSuccessAction = (data) => ({
  type: 'FETCH-DATA',
  data,
});

// export const fetchDataFailureAction = (err) => ({
//   type: 'DATA-FETCH-FAILURE',
//   payload: err,
// });

// export const coinsFetcher = () => (dispatch) => {
//   axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
//     .then((response) => {
//       const coins = response.data;
//       dispatch(fetchDataSuccessAction(coins));
//     }).catch((err) => {
//       const erroMsg = err.message;
//       console.log(erroMsg);
//     });
// };

const dataFetcher = async () => {
  try {
    const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const coinsFetcher = () => async (dispatch) => {
  const data = await dataFetcher();
  dispatch(fetchDataSuccessAction(data));
};

// export const coinsFetcher = () => async (dispatch) => {
//   try {
//     const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
//     const coins = await response.data;
//     dispatch(fetchDataSuccessAction(coins));
//   } catch (error) {
//     console.log(error.message);
//   }
// };
