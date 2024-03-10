import { createSlice } from '@reduxjs/toolkit'

export const licenseSlice = createSlice({
  name: 'license',
  initialState: {
    status: true,
  },
  reducers: {
    changeStatus: (state) => {
      state.status = !state.status;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStatus } = licenseSlice.actions

export default licenseSlice.reducer