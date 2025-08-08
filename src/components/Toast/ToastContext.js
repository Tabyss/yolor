import { createContext, useContext } from "react";

export const ToastContext = createContext({
  showToast: (message, duration) => {},
});
