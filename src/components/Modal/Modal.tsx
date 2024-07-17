import ReactDom from "react-dom";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ open, children }: ModalProps) => {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 flex h-[100vh] w-[100vw] items-center justify-center bg-gray-300/45">
      {children}
    </div>,
    document.getElementById("portal")!,
  );
};

export default Modal;
