import {createStore} from 'redux'
import persistedReducer from '../Reducer/combiner'

const store= createStore(persistedReducer)

export default store;