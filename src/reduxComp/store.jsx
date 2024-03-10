import { configureStore } from '@reduxjs/toolkit'
import licenseSlice from "./licenseSlice";

export default configureStore({
    reducer: {
        license: licenseSlice,
    },
})