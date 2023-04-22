import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './Contacts/Slice';
import authSlice from './Auth/Slice';

import storage from 'redux-persist/lib/storage';
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

const persisterAuthReducer = persistReducer(
  {
    storage,
    key: 'auth',
    whitelist: ['token'],
  },
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
    auth: persisterAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
