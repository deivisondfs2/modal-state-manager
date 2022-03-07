import { Action } from "redux";

//actions Types
enum Types {
  SHOW = "modal/show",
  CLOSE = "modal/close",
}

export interface ModalState {
  visible: boolean | undefined;
  title: string | undefined;
  description: string | undefined;
}

const initialState: ModalState = {
  visible: false,
  title: "",
  description: "",
};

type ModalProps = Pick<ModalState, "title" | "description">;

interface ModalTypes extends Action {
  type: Types.SHOW | Types.CLOSE;
  payload?: ModalState;
}

export interface DispatchProps {
  showModal: typeof showModal;
  closeModal: typeof closeModal;
}

//Reducer

const reducer = (state = initialState, action: ModalTypes): ModalState => {
  switch (action.type) {
    case Types.SHOW:
      return {
        ...state,
        title: action.payload?.title,
        description: action.payload?.description,
        visible: action.payload?.visible,
      };

    case Types.CLOSE:
      return { ...state, ...initialState };

    default:
      return state;
  }
};

//Action Creator

export const showModal = ({ title, description }: ModalProps): ModalTypes => {
  return {
    type: Types.SHOW,
    payload: {
      title,
      description,
      visible: true,
    },
  };
};

export const closeModal = (): ModalTypes => {
  return { type: Types.CLOSE };
};

export default reducer;
