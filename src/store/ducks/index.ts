import { combineReducers, createStore, Store } from "redux";

import modalReducer, { ModalState } from "./modal/modal";

export interface IAppState {
  readonly modal: ModalState;
}

const rootReducer = combineReducers<IAppState>({
  modal: modalReducer,
});

export function configureStore(): Store<IAppState> {
  const store = createStore(rootReducer);
  return store;
}
