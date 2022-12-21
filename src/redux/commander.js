import { createSlice } from '@reduxjs/toolkit';

export const commander = createSlice({
    name: 'commander',
    initialState: {
        commanderClicked: false ,
    },
    reducers: {
        commandeClicked: (state) => {
            state.commanderClicked = !state.commanderClicked;
        },
    },
})

export const { commandeClicked } = commander.actions
export default commander.reducer


