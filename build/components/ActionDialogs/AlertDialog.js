"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const Button_1 = require("@mui/material/Button");
const Dialog_1 = require("@mui/material/Dialog");
const DialogActions_1 = require("@mui/material/DialogActions");
const DialogContent_1 = require("@mui/material/DialogContent");
const DialogTitle_1 = require("@mui/material/DialogTitle");
function AlertDialog(props) {
    return (React.createElement(Dialog_1.default, { open: props.open, onClose: props.onDismiss, "aria-labelledby": 'alert-dialog-title', "aria-describedby": 'alert-dialog-description' },
        React.createElement("div", { style: { maxWidth: 400 } },
            React.createElement(DialogTitle_1.default, { id: 'alert-dialog-title' }, props.title || 'Alert'),
            React.createElement(DialogContent_1.default, null,
                React.createElement(material_1.Box, { sx: { pt: 1 }, id: 'alert-dialog-description' }, props.message)),
            React.createElement(DialogActions_1.default, { sx: { display: 'flex', gap: 2, justifyContent: 'end' } }, props.isConfirm ? (React.createElement(React.Fragment, null,
                React.createElement(Button_1.default, { onClick: props.onYesClick, autoFocus: true, variant: 'contained' }, props.yesLabel || 'Yes'),
                ' ',
                React.createElement(Button_1.default, { onClick: props.onDismiss }, props.noLabel || 'No'))) : (React.createElement(React.Fragment, null,
                React.createElement(Button_1.default, { onClick: props.onDismiss, autoFocus: true, variant: 'contained' }, props.yesLabel || 'OK')))))));
}
exports.default = AlertDialog;
//# sourceMappingURL=AlertDialog.js.map