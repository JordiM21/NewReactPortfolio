import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => {
            const loading = action.payload
            return loading
        }
    }
})

export const getLoadingThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    setIsLoading()
    dispatch(setIsLoading(false));
}

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
