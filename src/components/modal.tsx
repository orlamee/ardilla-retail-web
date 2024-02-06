"use-client";
import { useEffect } from "react";

type ModalType = {
  children: React.ReactNode;
};

function Modal({ children }: ModalType) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => document.body.classList.remove("overflow-y-hidden");
  }, []);

  return (
    <div className="fixed z-[999] inset-0 flex justify-center items-center w-screen h-screen bg-primary/50">
      <div className="px-4">{children}</div>
    </div>
  );
}

export default Modal;
