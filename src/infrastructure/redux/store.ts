import {combineReducers} from 'redux';
import contactReducer from './reducers/contact.reducer';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
