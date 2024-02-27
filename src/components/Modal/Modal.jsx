
import styles from './Modal.module.css';

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
        <div className={active ? `${styles.modal_content}` : styles.modal_content} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal;
