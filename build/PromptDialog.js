import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, } from '@mui/material';
import { useState } from 'react';
export default function PromptDialog(props) {
    const [value, setValue] = useState(props.value || '');
    const handleClose = (forceClose = false) => {
        if (props.required && !forceClose) {
            // needs to fill out an input
            // we don't want to allow user to click outside
            return;
        }
        props.onDismiss();
    };
    const onSave = (e) => {
        e.preventDefault();
        if (props.required && !value) {
            // needs to fill out an input
            // we don't want to allow user to click outside
            return;
        }
        props.onSaveClick(value.trim());
    };
    const isDisabled = !((value === null || value === void 0 ? void 0 : value.length) > 0);
    return (_jsx(Dialog, { onClose: () => handleClose(false), open: props.open, fullWidth: true, maxWidth: props.isLongPrompt ? 'lg' : 'sm', "aria-labelledby": `dialog-title-${props.id}`, "aria-describedby": `dialog-description-${props.id}`, children: _jsxs("form", { onSubmit: onSave, children: [_jsxs(DialogTitle, { id: `dialog-title-${props.id}`, children: [props.title, _jsx(IconButton, { "aria-label": 'close', onClick: () => handleClose(true), sx: {
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }, children: _jsx(CloseIcon, {}) })] }), _jsx(DialogContent, { dividers: true, id: `dialog-description-${props.id}`, children: props.isLongPrompt ? (_jsx(TextField, { label: props.message, value: value, onChange: (e) => setValue(e.target.value), required: props.required, size: 'small', multiline: true, fullWidth: true, autoFocus: true })) : (_jsx(TextField, { label: props.message, value: value, onChange: (e) => setValue(e.target.value), required: props.required, size: 'small', fullWidth: true, autoFocus: true })) }), props.readonly !== true && (_jsx(DialogActions, { sx: { display: 'flex', gap: 2, justifyContent: 'end' }, children: _jsx(Button, { type: 'submit', disabled: isDisabled, variant: 'contained', children: props.saveLabel || 'Save Changes' }) }))] }) }));
}
//# sourceMappingURL=PromptDialog.js.map