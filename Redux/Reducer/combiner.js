
import UserData from './User'
import CurrencyData from './Currency'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


import {combineReducers} from "redux"
const rootReducer = combineReducers({UserData,CurrencyData})
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;
