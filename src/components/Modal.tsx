import { useActions } from '../hooks/useActions';
import './modal.scss';

interface IModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IModalProps> = ({ children, modal, setModal }) => {
  const { unlock } = useActions();

  return (
    <div
      className={modal ? 'modal _active' : 'modal'}
      onClick={() => {
        setModal(false);
        unlock();
      }}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
