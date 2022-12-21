import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import commanderReducer from './commander'
import navbarReducer from './navbar'

export default configureStore({
    reducer: {
        counter: counterReducer,
        commander: commanderReducer,
        navbar: navbarReducer,
    },
})