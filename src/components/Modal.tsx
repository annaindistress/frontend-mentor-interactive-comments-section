import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./Modal.module.css";

interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onDelete: () => void;
}

function Modal({ setIsOpen, onDelete }: ModalProps) {
  function handleCancel() {
    setIsOpen(false);
  }

  function handleDelete() {
    onDelete();
    setIsOpen(false);
  }

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.title}>Delete comment</p>
        <p className={styles.text}>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className={styles.controls}>
          <ButtonPrimary
            type="button"
            className={styles.button}
            onClick={handleCancel}
          >
            No, cancel
          </ButtonPrimary>
          <ButtonPrimary
            type="button"
            variant="danger"
            className={styles.button}
            onClick={handleDelete}
          >
            Yes, delete
          </ButtonPrimary>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
