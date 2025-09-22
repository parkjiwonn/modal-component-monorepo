export { default as Modal } from './components/Modal';
export { useModal, ModalProvider } from './hooks/useModal';
export { useOutsideClick } from './hooks/useOutsideClick';
export { default as useToggle } from './hooks/useToggle';
export { keyPress } from './utils/keyPress';
import './styles/modal.css';
export type { ModalProps, ModalOptions, ModalContextType, ModalProviderProps, KeyHandlers, KeyPressOptions } from './types';
