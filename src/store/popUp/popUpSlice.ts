import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PopUpState {
  isOpen: boolean;
  message: string;
}

const initialState: PopUpState = {
  isOpen: false,
  message: '',
};

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    openPopUp: (state: PopUpState, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    closePopUp: (state: PopUpState) => {
      state.isOpen = false;
    },
  },
});

export const { openPopUp, closePopUp } = popUpSlice.actions;
