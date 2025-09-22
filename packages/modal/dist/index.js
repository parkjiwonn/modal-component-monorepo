'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useOutsideClick = function (callback) {
    var handlersRef = react.useRef(new Map());
    react.useEffect(function () {
        var handleClick = function (event) {
            var handlers = handlersRef.current;
            handlers.forEach(function (callback, element) {
                if (element && !element.contains(event.target)) {
                    callback();
                }
            });
        };
        document.addEventListener('mousedown', handleClick);
        return function () {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);
    return function (element) {
        if (!element)
            return;
        handlersRef.current.set(element, callback);
        return function () {
            handlersRef.current.delete(element);
        };
    };
};

var keyPress = function (handlers, options) {
    if (options === void 0) { options = {}; }
    var _a = options.preventDefault, preventDefault = _a === void 0 ? false : _a, _b = options.caseSensitive, caseSensitive = _b === void 0 ? false : _b;
    return function (event) {
        var key = event.key;
        // 기본 키 매핑
        var defaultKeyMap = {
            'Enter': 'onEnter',
            'Escape': 'onEscape',
            ' ': 'onSpace',
            'Tab': 'onTab',
            'ArrowUp': 'onArrowUp',
            'ArrowDown': 'onArrowDown',
            'ArrowLeft': 'onArrowLeft',
            'ArrowRight': 'onArrowRight',
        };
        var handlerName;
        if (defaultKeyMap[key]) {
            handlerName = defaultKeyMap[key];
        }
        else {
            // 커스텀 키 처리
            var normalizedKey = caseSensitive ? key : key.toLowerCase();
            handlerName = normalizedKey;
        }
        if (handlerName && handlers[handlerName]) {
            var shouldPreventDefault = preventDefault === true ||
                (Array.isArray(preventDefault) && preventDefault.includes(key));
            if (shouldPreventDefault) {
                event.preventDefault();
            }
            handlers[handlerName](event);
        }
    };
};

function Modal(_a) {
    var isOpen = _a.isOpen, message = _a.message, onConfirm = _a.onConfirm, onCancel = _a.onCancel, _b = _a.enableOutsideClick, enableOutsideClick = _b === void 0 ? true : _b, _c = _a.enableKeyboardShortcuts, enableKeyboardShortcuts = _c === void 0 ? true : _c, _d = _a.showCancelButton, showCancelButton = _d === void 0 ? true : _d;
    var modalRef = react.useRef(null);
    // 외부 클릭으로 모달 닫기
    var registerOutsideClick = useOutsideClick(function () {
        if (enableOutsideClick && onCancel) {
            onCancel();
        }
    });
    // 키보드 이벤트 처리
    var handleKeyPress = keyPress({
        onEscape: function () {
            if (enableKeyboardShortcuts && onCancel) {
                onCancel();
            }
        },
        onEnter: function () {
            if (enableKeyboardShortcuts && onConfirm) {
                onConfirm();
            }
        }
    }, { preventDefault: ['Escape', 'Enter'] });
    // 외부 클릭 등록
    react.useEffect(function () {
        if (modalRef.current && isOpen) {
            return registerOutsideClick(modalRef.current);
        }
    }, [registerOutsideClick, isOpen]);
    // 키보드 이벤트 등록
    react.useEffect(function () {
        if (isOpen && enableKeyboardShortcuts) {
            document.addEventListener('keydown', handleKeyPress);
            return function () {
                document.removeEventListener('keydown', handleKeyPress);
            };
        }
    }, [isOpen, handleKeyPress, enableKeyboardShortcuts]);
    // 모달이 열릴 때 포커스 설정
    react.useEffect(function () {
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
        }
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (jsxRuntime.jsx("div", __assign({ className: "modal-overlay" }, { children: jsxRuntime.jsxs("div", __assign({ className: "modal-content enhanced-modal", ref: modalRef, tabIndex: -1 }, { children: [jsxRuntime.jsxs("div", __assign({ className: "modal-header" }, { children: [jsxRuntime.jsx("h3", { children: "\uC54C\uB9BC" }), enableKeyboardShortcuts && (jsxRuntime.jsx("div", __assign({ className: "modal-shortcuts" }, { children: jsxRuntime.jsx("small", { children: "ESC: \uCDE8\uC18C | Enter: \uD655\uC778" }) })))] })), jsxRuntime.jsx("div", __assign({ className: "modal-body" }, { children: jsxRuntime.jsx("p", { children: message }) })), jsxRuntime.jsxs("div", __assign({ className: "modal-buttons" }, { children: [jsxRuntime.jsx("button", __assign({ onClick: onConfirm ? onConfirm : undefined, className: "confirm-btn", autoFocus: true }, { children: "\uD655\uC778" })), showCancelButton && (jsxRuntime.jsx("button", __assign({ onClick: onCancel ? onCancel : undefined, className: "cancel-btn" }, { children: "\uCDE8\uC18C" })))] })), enableOutsideClick && (jsxRuntime.jsx("div", __assign({ className: "modal-hint" }, { children: jsxRuntime.jsx("small", { children: "\uBAA8\uB2EC \uC678\uBD80\uB97C \uD074\uB9AD\uD558\uAC70\uB098 ESC\uD0A4\uB97C \uB20C\uB7EC \uB2EB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4" }) })))] })) })));
}

var ModalContext = react.createContext(undefined);
var useModal = function () {
    var context = react.useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = react.useState({
        isOpen: false,
        message: '',
        onConfirm: null,
        onCancel: null,
        options: {}
    }), modalState = _b[0], setModalState = _b[1];
    var showModal = react.useCallback(function (message, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var _a, enableOutsideClick, _b, enableKeyboardShortcuts, _c, showCancelButton, otherOptions;
            return __generator(this, function (_d) {
                _a = options.enableOutsideClick, enableOutsideClick = _a === void 0 ? true : _a, _b = options.enableKeyboardShortcuts, enableKeyboardShortcuts = _b === void 0 ? true : _b, _c = options.showCancelButton, showCancelButton = _c === void 0 ? true : _c, otherOptions = __rest(options, ["enableOutsideClick", "enableKeyboardShortcuts", "showCancelButton"]);
                return [2 /*return*/, new Promise(function (resolve) {
                        setModalState({
                            isOpen: true,
                            message: message,
                            onConfirm: function () {
                                setModalState({
                                    isOpen: false,
                                    message: '',
                                    onConfirm: null,
                                    onCancel: null,
                                    options: {}
                                });
                                resolve(true);
                            },
                            onCancel: function () {
                                setModalState({
                                    isOpen: false,
                                    message: '',
                                    onConfirm: null,
                                    onCancel: null,
                                    options: {}
                                });
                                resolve(false);
                            },
                            options: __assign({ enableOutsideClick: enableOutsideClick, enableKeyboardShortcuts: enableKeyboardShortcuts, showCancelButton: showCancelButton }, otherOptions)
                        });
                    })];
            });
        });
    }, []);
    return (jsxRuntime.jsxs(ModalContext.Provider, __assign({ value: {
            confirm: showModal,
            alert: function (message) { return showModal(message, { showCancelButton: false }); }
        } }, { children: [children, jsxRuntime.jsx(Modal, __assign({}, modalState, modalState.options))] })));
};

var useToggle = function (initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = react.useState(initialValue), value = _a[0], setValue = _a[1];
    var toggle = react.useCallback(function () { return setValue(!value); }, [value]);
    var setTrue = react.useCallback(function () { return setValue(true); }, []);
    var setFalse = react.useCallback(function () { return setValue(false); }, []);
    return [value, toggle, setTrue, setFalse];
};

exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.keyPress = keyPress;
exports.useModal = useModal;
exports.useOutsideClick = useOutsideClick;
exports.useToggle = useToggle;
//# sourceMappingURL=index.js.map
