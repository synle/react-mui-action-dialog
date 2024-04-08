import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { BaseDialogInput } from './types';
import React from 'react';

export type PromptInput = BaseDialogInput & {
  message: string;
  value?: string;
  isLongPrompt?: boolean;
  saveLabel?: string;
  languageMode?: string;
  required?: boolean;
  readonly?: boolean;
};

export default function PromptDialog(
  props: PromptInput & {
    open: boolean;
    onSaveClick: (newValue: string) => void;
    onDismiss: () => void;
  },
) {
  const [value, setValue] = useState(props.value || '');

  const handleClose = (forceClose = false) => {
    if (props.required && !forceClose) {
      // needs to fill out an input
      // we don't want to allow user to click outside
      return;
    }
    props.onDismiss();
  };

  const onSave = (e: SyntheticEvent) => {
    e.preventDefault();
    if (props.required && !value) {
      // needs to fill out an input
      // we don't want to allow user to click outside
      return;
    }
    props.onSaveClick(value.trim());
  };

  const isDisabled = !(value?.length > 0);

  return (
    <Dialog
      onClose={() => handleClose(false)}
      open={props.open}
      fullWidth={true}
      maxWidth={props.isLongPrompt ? 'lg' : 'sm'}
      aria-labelledby={`dialog-title-${props.id}`}
      aria-describedby={`dialog-description-${props.id}`}>
      <form onSubmit={onSave}>
        <DialogTitle id={`dialog-title-${props.id}`}>
          {props.title}
          <IconButton
            aria-label='close'
            onClick={() => handleClose(true)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers id={`dialog-description-${props.id}`}>
          {props.isLongPrompt ? (
            <TextField
              label={props.message}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required={props.required}
              size='small'
              multiline
              fullWidth
              autoFocus
            />
          ) : (
            <TextField
              label={props.message}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required={props.required}
              size='small'
              fullWidth
              autoFocus
            />
          )}
        </DialogContent>
        {props.readonly !== true && (
          <DialogActions sx={{ display: 'flex', gap: 2, justifyContent: 'end' }}>
            <Button type='submit' disabled={isDisabled} variant='contained'>
              {props.saveLabel || 'Save Changes'}
            </Button>
          </DialogActions>
        )}
      </form>
    </Dialog>
  );
}
