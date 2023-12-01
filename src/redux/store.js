// import { configureStore } from '@reduxjs/toolkit';
// import { carsReducer } from './carsSlice';
// import { filtersReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     cars: carsReducer,
//     filters: filtersReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const carsPresistConfig = {
  key: 'cars',
  storage,
  whitelist: ['items', 'favorites'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsPresistConfig, carsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  evTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
