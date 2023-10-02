"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AlertDialog_1 = require("./AlertDialog");
const ChoiceDialog_1 = require("./ChoiceDialog");
const ModalDialog_1 = require("./ModalDialog");
const PromptDialog_1 = require("./PromptDialog");
const ActionDialogs_1 = require("../../hooks/ActionDialogs");
function ActionDialogs(props) {
    const { dialogs, dismiss } = (0, ActionDialogs_1.useActionDialogs)();
    if (!dialogs || dialogs.length === 0) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, dialogs.map((dialog, idx) => {
        if (!dialog) {
            return null;
        }
        const onConfirmSubmit = () => {
            dismiss();
            dialog.onSubmit && dialog.onSubmit(true);
        };
        const onPromptSaveClick = (newValue) => {
            dismiss();
            dialog.onSubmit && dialog.onSubmit(true, newValue);
        };
        const onChoiceSelect = (newValue) => {
            dismiss();
            dialog.onSubmit && dialog.onSubmit(true, newValue);
        };
        const onDimiss = () => {
            dismiss();
            dialog.onSubmit && dialog.onSubmit(false);
        };
        let contentDom = react_1.default.createElement(react_1.default.Fragment, null);
        switch (dialog.type) {
            case 'alert':
                contentDom = (react_1.default.createElement(AlertDialog_1.default, { open: true, title: 'Alert', message: dialog.message, onDismiss: onDimiss, isConfirm: false }));
                break;
            case 'confirm':
                contentDom = (react_1.default.createElement(AlertDialog_1.default, { open: true, title: 'Confirmation', message: dialog.message, yesLabel: dialog.yesLabel, onYesClick: onConfirmSubmit, onDismiss: onDimiss, isConfirm: true }));
                break;
            case 'prompt':
                contentDom = (react_1.default.createElement(PromptDialog_1.default, { open: true, title: dialog.title, message: dialog.message, value: dialog.value, onSaveClick: onPromptSaveClick, onDismiss: onDimiss, languageMode: dialog.languageMode, isLongPrompt: dialog.isLongPrompt, saveLabel: dialog.saveLabel, required: dialog.required, readonly: dialog.readonly }));
                break;
            case 'choice':
                contentDom = (react_1.default.createElement(ChoiceDialog_1.default, { open: true, title: dialog.title, message: dialog.message, options: dialog.options, onSelect: onChoiceSelect, onDismiss: onDimiss, required: dialog.required }));
                break;
            case 'modal':
                contentDom = (react_1.default.createElement(ModalDialog_1.default, { open: true, title: dialog.title, message: dialog.message, onDismiss: onDimiss, showCloseButton: !!dialog.showCloseButton, disableBackdropClick: !!dialog.disableBackdropClick, size: dialog.size }));
                break;
        }
        return react_1.default.createElement(react_1.default.Fragment, { key: idx }, contentDom);
    })));
}
exports.default = ActionDialogs;
//# sourceMappingURL=index.js.map