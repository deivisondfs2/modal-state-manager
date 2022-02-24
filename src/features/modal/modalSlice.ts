import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  visible: boolean;
  title: string;
  description: string;
}

const initialState: ModalState = {
  visible: false,
  title: "",
  description: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalState>) => {
      state.visible = action.payload.visible;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    closeModal: (state) => {
      const { visible, title, description } = initialState;
      state.visible = visible;
      state.title = title;
      state.description = description;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
