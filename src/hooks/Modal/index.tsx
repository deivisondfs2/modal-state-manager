import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ModalProps {
  title: string;
  description: string;
}

interface ModalVisibleProps extends ModalProps {
  visible: boolean;
}

interface ModalContextProps {
  modal: ModalVisibleProps;
  showModal: ({ title, description }: ModalProps) => void;
  closeModal: () => void;
}

const initialState = {
  visible: false,
  title: "",
  description: "",
} as ModalVisibleProps;

const ModalProviderContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ProviderProps) => {
  const [modal, setModal] = useState<ModalVisibleProps>(initialState);

  const showModal = ({ title, description }: ModalProps) => {
    setModal({ visible: true, title, description });
  };

  const closeModal = () => {
    setModal(initialState);
  };

  return (
    <ModalProviderContext.Provider value={{ modal, showModal, closeModal }}>
      {children}
    </ModalProviderContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalProviderContext);
  return context;
};

export { ModalProvider, useModal };
