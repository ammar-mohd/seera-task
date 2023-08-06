import { Modal } from "@mui/material";

const CustomModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "300px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "4px",
            width: "100%",
            height: "100%",
            display: "flex",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
