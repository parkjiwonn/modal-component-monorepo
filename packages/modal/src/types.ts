import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
  enableOutsideClick?: boolean;
  enableKeyboardShortcuts?: boolean;
  showCancelButton?: boolean;
}

export interface ModalOptions {
  enableOutsideClick?: boolean;
  enableKeyboardShortcuts?: boolean;
  showCancelButton?: boolean;
  [key: string]: any;
}

export interface ModalContextType {
  confirm: (message: string, options?: ModalOptions) => Promise<boolean>;
  alert: (message: string) => Promise<boolean>;
}

export interface ModalProviderProps {
  children: ReactNode;
}

export interface KeyHandlers {
  onEnter?: (event: KeyboardEvent) => void;
  onEscape?: (event: KeyboardEvent) => void;
  onSpace?: (event: KeyboardEvent) => void;
  onTab?: (event: KeyboardEvent) => void;
  onArrowUp?: (event: KeyboardEvent) => void;
  onArrowDown?: (event: KeyboardEvent) => void;
  onArrowLeft?: (event: KeyboardEvent) => void;
  onArrowRight?: (event: KeyboardEvent) => void;
  [key: string]: ((event: KeyboardEvent) => void) | undefined;
}

export interface KeyPressOptions {
  preventDefault?: boolean | string[];
  caseSensitive?: boolean;
}