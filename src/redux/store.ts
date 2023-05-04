import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {dateReducer} from '../redux/reducers';

export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});
