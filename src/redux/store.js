import {configureStore} from '@reduxjs/toolkit'
import { contactsSlice } from 'redux/sliceContacts '
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterSlice } from './sliceFilter'
import {createContactsApi} from './sliceContacts '

const persistConfig = {
    key: 'contacts',
    storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer) 

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterSlice.reducer,
        [createContactsApi.reducerPath]: createContactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      
    }),
    createContactsApi.middleware,
  ]

})

export const persistor = persistStore(store)