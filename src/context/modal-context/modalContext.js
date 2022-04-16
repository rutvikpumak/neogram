import { createContext, useContext, useEffect, useReducer, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        profileModal,
        setProfileModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
