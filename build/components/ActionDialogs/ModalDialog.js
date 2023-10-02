"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Close_1 = require("@mui/icons-material/Close");
const material_1 = require("@mui/material");
const Dialog_1 = require("@mui/material/Dialog");
const DialogContent_1 = require("@mui/material/DialogContent");
const DialogTitle_1 = require("@mui/material/DialogTitle");
const IconButton_1 = require("@mui/material/IconButton");
function Modal(props) {
    const onBackdropClick = () => {
        if (props.disableBackdropClick !== true) {
            props.onDismiss();
        }
    };
    return (React.createElement(Dialog_1.default, { open: props.open, onClose: onBackdropClick, "aria-labelledby": 'modal-dialog-title', "aria-describedby": 'modal-dialog-description', fullWidth: true, maxWidth: props.size },
        React.createElement(DialogTitle_1.default, { id: 'modal-dialog-title' },
            props.title,
            props.showCloseButton && (React.createElement(IconButton_1.default, { "aria-label": 'close', onClick: () => props.onDismiss(), sx: {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                } },
                React.createElement(Close_1.default, null)))),
        React.createElement(DialogContent_1.default, null,
            React.createElement(material_1.Box, { sx: { pt: 1 } }, props.message))));
}
exports.default = Modal;
//# sourceMappingURL=ModalDialog.js.map