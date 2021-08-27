import filterReducer from '../Reducers/GenreFilter';
import moviesReducer from '../Reducers/Movies';
import filterReducer from '../Reducers/FilterReducer'
import cryptoReducer from '../Reducers/CryptoReducer'

describe('Reducers', () => {
  const FETCH_MOVIES = 'FETCH_MOVIES';
  const CHANGE_FILTER = 'CHANGE_FILTER';
  const action = {
    type: FETCH_MOVIES,
    movies: [
      { movie1: 'movie1', genre_ids: [1, 2, 3] },
      { movie1: 'movie1', genre_ids: [0, 4, 3] },
      { movie1: 'movie1', genre_ids: [6, 2, 5] },
    ],
  };
  const action2 = {
    type: CHANGE_FILTER,
    filter: 2,
  };
  it('movies reducer has an initial state', () => {
    expect(moviesReducer([], {})).toEqual([]);
  });

  it('movies reducer has movies in state', () => {
    expect(moviesReducer([], action).length).toEqual(3);
  });

  it('filter reducer returns a genre id', () => {
    expect(filterReducer('All', action2)).toEqual(2);
  });
});