
// Components
export { default as Modal } from './components/Modal';

// Hooks
export { useModal, ModalProvider } from './hooks/useModal';
export { useOutsideClick } from './hooks/useOutsideClick';
export { default as useToggle } from './hooks/useToggle';

// Utils
export { keyPress } from './utils/keyPress';

// Styles
import './styles/modal.css';

// Types
export type {
  ModalProps,
  ModalOptions,
  ModalContextType,
  ModalProviderProps,
  KeyHandlers,
  KeyPressOptions
} from './types';