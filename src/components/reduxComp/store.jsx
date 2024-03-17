import { configureStore } from '@reduxjs/toolkit'
import licenseSlice from "./licenseSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        license: licenseSlice,
        user: userSlice
    },
})