import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { BaseDialogInput } from './types';

export type AlertInput = BaseDialogInput & {
  message: ReactNode;
  yesLabel?: ReactNode;
  onYesClick?: () => void;
  noLabel?: ReactNode;
  isConfirm?: boolean;
};

export default function AlertDialog(
  props: AlertInput & {
    open: boolean;
    onDismiss: () => void;
  },
) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onDismiss}
      aria-labelledby={`dialog-title-${props.id}`}
      aria-describedby={`dialog-description-${props.id}`}>
      <Box sx={{ maxWidth: 600, minWidth: 400 }}>
        <DialogTitle id={`dialog-title-${props.id}`}>
          {props.title}
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
        <DialogContent>
          <Box sx={{ pt: 1 }} id={`dialog-description-${props.id}`}>
            {props.message}
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', gap: 2, justifyContent: 'end' }}>
          {props.isConfirm ? (
            <>
              <Button onClick={props.onDismiss}>{props.noLabel || 'No'}</Button>
              <Button onClick={props.onYesClick} autoFocus variant='contained'>
                {props.yesLabel || 'Yes'}
              </Button>{' '}
            </>
          ) : (
            <>
              <Button onClick={props.onDismiss} autoFocus variant='contained'>
                {props.yesLabel || 'OK'}
              </Button>
            </>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
}
