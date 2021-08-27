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
    const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=48');
    const coins = await response.data;
    dispatch(fetchDataSuccessAction(coins));
  } catch (error) {
    console.log(error.message);
  }
};

// export const detailsFetcher = () => async (dispatch) => {
//   const { id } = useParams();
//   try {
//     const response = await axios.get(`https://api.coinstats.app/public/v1/markets?coinId=${id}`);
//     const coins = await response.data;
//     dispatch(selectedAction(coins));
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(id);
// };
