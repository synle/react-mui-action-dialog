import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { ReactNode } from 'react';

export type ModalInput = {
  title: ReactNode;
  /**
   * body of the modal
   */
  message: ReactNode;
  showCloseButton?: boolean;
  disableBackdropClick?: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg';
};

type ModalProps = ModalInput & {
  key: string;
  open: boolean;
  onDismiss: () => void;
};

export default function Modal(props: ModalProps): ReactNode {
  const onBackdropClick = () => {
    if (props.disableBackdropClick !== true) {
      props.onDismiss();
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={onBackdropClick}
      aria-labelledby='modal-dialog-title'
      aria-describedby='modal-dialog-description'
      fullWidth={true}
      maxWidth={props.size}>
      <DialogTitle id='modal-dialog-title'>
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
      <DialogContent>
        <Box sx={{ pt: 1 }}>{props.message}</Box>
      </DialogContent>
    </Dialog>
  );
}
