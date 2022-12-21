import { createSlice } from '@reduxjs/toolkit';

export const navbar = createSlice({
    name: 'navbar',
    initialState: {
        optionSelected: 'Accueil'
    },
    reducers: {
        optionChanged : (state, action) => {
            state.optionSelected = action.payload;
        },
    },
})

export const { optionChanged } = navbar.actions
export default navbar.reducer


