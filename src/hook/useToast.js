import { useContext } from "react";
import { ToastContext } from "../components/Toast/ToastContext";

const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used inside ToastProvider");
    return context.showToast;
};

export default useToast;
