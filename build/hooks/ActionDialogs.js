"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionDialogs = exports.ActionDialogsContext = void 0;
const react_1 = require("react");
const ActionDialogs_1 = require("../components/ActionDialogs");
let _actionDialogs = [];
let modalId = Date.now();
//
const TargetContext = (0, react_1.createContext)({
    data: _actionDialogs,
    setData: (_newDialogs) => { },
});
function ActionDialogsContext(props) {
    // State to hold the theme value
    const [data, setData] = (0, react_1.useState)(_actionDialogs);
    // Provide the theme value and toggle function to the children components
    return (React.createElement(TargetContext.Provider, { value: { data, setData } },
        props.children,
        React.createElement(ActionDialogs_1.default, null)));
}
exports.ActionDialogsContext = ActionDialogsContext;
function useActionDialogs() {
    const { data, setData } = (0, react_1.useContext)(TargetContext);
    const prompt = (props) => {
        return new Promise((resolve, reject) => {
            _actionDialogs.push(Object.assign({ key: `modal.${modalId++}`, type: 'prompt', onSubmit: (yesSelected, newValue) => {
                    yesSelected ? resolve(newValue) : reject();
                } }, props));
            _invalidateQueries();
        });
    };
    const confirm = (message, yesLabel) => {
        return new Promise((resolve, reject) => {
            _actionDialogs.push({
                key: `modal.${modalId++}`,
                type: 'confirm',
                message,
                yesLabel,
                onSubmit: (yesSelected) => {
                    yesSelected ? resolve() : reject();
                },
            });
            _invalidateQueries();
        });
    };
    const choice = (title, message, options, required) => {
        return new Promise((resolve, reject) => {
            _actionDialogs.push({
                key: `modal.${modalId++}`,
                type: 'choice',
                title,
                message,
                options,
                onSubmit: (yesSelected, newValue) => {
                    yesSelected && newValue ? resolve(newValue) : reject();
                },
                required,
            });
            _invalidateQueries();
        });
    };
    const alert = (message) => {
        return new Promise((resolve, reject) => {
            _actionDialogs.push({
                key: `modal.${modalId++}`,
                type: 'alert',
                message,
            });
            _invalidateQueries();
        });
    };
    const modal = (props) => {
        return new Promise((resolve, reject) => {
            _actionDialogs.push(Object.assign({ key: `modal.${modalId++}`, type: 'modal', onSubmit: () => { } }, props));
            _invalidateQueries();
        });
    };
    let dialog;
    try {
        if (data) {
            dialog = data[data.length - 1];
        }
    }
    catch (err) {
        dialog = undefined;
    }
    const dismiss = (modalIdToDismiss) => {
        if (modalIdToDismiss) {
            _actionDialogs = _actionDialogs.filter((modal) => modal.key !== modalIdToDismiss);
        }
        else {
            _actionDialogs.pop();
        }
        _invalidateQueries();
    };
    function _invalidateQueries() {
        _actionDialogs = [..._actionDialogs];
        setData(_actionDialogs);
    }
    return {
        dialogs: data,
        dialog,
        alert,
        prompt,
        confirm,
        choice,
        dismiss,
        modal,
    };
}
exports.useActionDialogs = useActionDialogs;
//# sourceMappingURL=ActionDialogs.js.map