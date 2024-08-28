import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isTabOption, TabOption } from "../../types/ui";
export interface UiState {
    menuOpen: boolean;
    tab: TabOption;
}

const initialState = {
    menuOpen: false,
    tab: 'home',
} satisfies UiState as UiState;

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducer: {
        toggleMenu: (state) => {
            state.menuOpen = !state.menuOpen;
        },
        setTab: (state, action: PayloadAction<TabOption>) => {
            if (isTabOption(action.payload)) {
                state.tab = action.payload;
            } else {
                state.tab = 'home';
                console.error('Invalid tab option: ' + action.payload);
            }
        }
    }
})

export const { toggleMenu, setTab } = uiSlice.actions;

export default uiSlice.reducer;