import React, { useState, useCallback } from "react";
import { ToastContext } from "./ToastContext";
import ToastContainer from "./ToastContainer";

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, duration = 2000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer message={toast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
