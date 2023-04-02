import {configureStore} from "@reduxjs/toolkit";
import productreducer from './Slice'
const store = configureStore({
    reducer:{
        User:productreducer,
    }

})

export default store;