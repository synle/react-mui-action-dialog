import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React, { ReactNode } from 'react';
import { BaseDialogInput } from './types';

export type ModalInput = BaseDialogInput & {
  /**
   * body of the modal
   */
  message: ReactNode;
  showCloseButton?: boolean;
  disableBackdropClick?: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg';
};

export default function Modal(
  props: ModalInput & {
    open: boolean;
    onDismiss: () => void;
  },
) {
  const onBackdropClick = () => {
    if (props.disableBackdropClick !== true) {
      props.onDismiss();
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={onBackdropClick}
      fullWidth={true}
      maxWidth={props.size}
      aria-labelledby={`dialog-title-${props.id}`}
      aria-describedby={`dialog-description-${props.id}`}>
      <DialogTitle id={`dialog-title-${props.id}`}>
        {props.title}
        {props.showCloseButton && (
          <IconButton
            aria-label='close'
            onClick={() => props.onDismiss()}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent id={`dialog-description-${props.id}`}>
        <Box sx={{ pt: 1 }}>{props.message}</Box>
      </DialogContent>
    </Dialog>
  );
}
