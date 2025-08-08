import "./Toast.scss";

const ToastContainer = ({ message }) => {
    if (!message) return null;

    return <div className="toast">{message}</div>;
};

export default ToastContainer;
