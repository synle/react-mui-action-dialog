import { ReactNode } from 'react';
import { AlertInput } from './AlertDialog';
import { ChoiceInput } from './ChoiceDialog';
import { ModalInput } from './ModalDialog';
import { PromptInput } from './PromptDialog';

export type ActionDialogRef = {
  /**
   * The ID of the modal createc
   */
  id: string;
  /**
   * This method can be used to close / dismiss the modal programtically
   * @returns
   */
  dismiss: () => void;
};

/**
 * base type used in all the dialog input
 */

export type BaseDialogInput = {
  id: string;
  title: ReactNode;
};

export type ActionDialog = BaseDialogInput &
  (
    | (AlertInput & {
        type: 'alert';
        message: ReactNode;
        yesLabel?: string;
        onSubmit?: () => void;
      })
    | {
        type: 'confirm';
        message: ReactNode;
        yesLabel?: string;
        onSubmit: (yesSelected: boolean) => void;
      }
    | ({
        type: 'choice-single';
        onSubmit: (selectedChoice?: string) => void;
        value?: string
      } & ChoiceInput)
    | ({
        type: 'choice-multiple';
        onSubmit: (selectedOptions: string[]) => void;
        value?: string[],
      } & ChoiceInput)
    | ({
        type: 'prompt';
        onSubmit: (newValue: string) => void;
      } & PromptInput)
    | ({
        type: 'modal';
        onSubmit: (closed: boolean) => void;
      } & ModalInput)
  );
