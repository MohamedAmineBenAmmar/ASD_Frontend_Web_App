import { configureStore } from '@reduxjs/toolkit'
import  dataMangerReducer  from './dataManagerSlice';

export default configureStore({
    reducer: {
        dataManager: dataMangerReducer
    },
});