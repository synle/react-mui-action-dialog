import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { BaseDialogInput } from './types';
export type ChoiceOption = {
  startIcon?: ReactNode;
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export type ChoiceInput = BaseDialogInput & {
  message: ReactNode;
  options: ChoiceOption[];
  required?: boolean;
};

export default function ChoiceDialog(
  props: ChoiceInput & {
    open: boolean;
    onSelect: (newValue: string) => void;
    onDismiss: () => void;
  },
) {
  const {
    title,
    message,
    options,
    open,
    required,
    onDismiss: handleClose,
    onSelect: handleListItemClick,
  } = props;

  let onClose: (() => void) | undefined = handleClose;
  if (required) {
    onClose = undefined;
  }

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth={true}
      aria-labelledby={`dialog-title-${props.id}`}
      aria-describedby={`dialog-description-${props.id}`}>
      <DialogTitle id={`dialog-title-${props.id}`}>
        {title}
        <IconButton
          aria-label='close'
          onClick={props.onDismiss}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ mt: 1 }} id={`dialog-description-${props.id}`}>
        {message}
        <List dense>
          {options.map((option) => (
            <ListItem
              button
              onClick={() => !option.disabled && handleListItemClick(option.value)}
              disabled={!!option.disabled}
              key={option.value}
              sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
              {!option.startIcon ? null : option.startIcon}
              <ListItemText primary={option.label} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}
