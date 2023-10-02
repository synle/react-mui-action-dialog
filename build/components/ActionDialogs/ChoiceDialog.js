"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = require("@mui/material/Dialog");
const DialogContent_1 = require("@mui/material/DialogContent");
const DialogTitle_1 = require("@mui/material/DialogTitle");
const List_1 = require("@mui/material/List");
const ListItem_1 = require("@mui/material/ListItem");
const ListItemText_1 = require("@mui/material/ListItemText");
function ChoiceDialog(props) {
    const { title, message, options, open, required, onDismiss: handleClose, onSelect: handleListItemClick, } = props;
    let onClose = handleClose;
    if (required) {
        onClose = undefined;
    }
    return (React.createElement(Dialog_1.default, { onClose: onClose, open: open, fullWidth: true },
        React.createElement(DialogTitle_1.default, null, title),
        React.createElement(DialogContent_1.default, { sx: { mt: 1 } },
            message,
            React.createElement(List_1.default, { dense: true }, options.map((option) => (React.createElement(ListItem_1.default, { button: true, onClick: () => !option.disabled && handleListItemClick(option.value), disabled: !!option.disabled, key: option.value, sx: { alignItems: 'center', display: 'flex', gap: 1 } },
                !option.startIcon ? null : option.startIcon,
                React.createElement(ListItemText_1.default, { primary: option.label }))))))));
}
exports.default = ChoiceDialog;
//# sourceMappingURL=ChoiceDialog.js.map