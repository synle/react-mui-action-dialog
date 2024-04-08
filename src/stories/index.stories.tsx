import React, { ReactNode } from 'react';
import { ActionDialogsContext } from 'react-mui-action-dialog';
import { AlertExample } from './AlertExample';
import { ChoiceExample } from './ChoiceExample';
import { ConfirmExample } from './ConfirmExample';
import {
  ModalExample,
  ModalExampleWithChildComponent,
  ModalExampleWithFormSubmit,
  ModalExampleWithManualDismiss,
} from './ModalExample';
import { PromptExample } from './PromptExample';

export default {
  title: 'Action Dialog Examples',
  parameters: {
    layout: 'fullscreen',
  },
};

function ExampleWrapper(props: { children: ReactNode; title: string }) {
  return (
    <ActionDialogsContext>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '1rem 2rem',
          gap: '1rem',
        }}>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </ActionDialogsContext>
  );
}

export const Alert = () => {
  return (
    <ExampleWrapper title='Simple Alert Example'>
      <div>This is a simple example with alert.</div>
      <AlertExample />
    </ExampleWrapper>
  );
};

export const Choice = () => {
  return (
    <ExampleWrapper title='Simple Choice Example'>
      <div>This is a simple example with choice.</div>
      <ChoiceExample />
    </ExampleWrapper>
  );
};

export const Confirm = () => {
  return (
    <ExampleWrapper title='Simple Confirm Example'>
      <div>This is a simple example with confirm.</div>
      <ConfirmExample />
    </ExampleWrapper>
  );
};

export const Modal = () => {
  return (
    <ExampleWrapper title='Simple Modal Example'>
      <div>This is a simple example with modal with custom content.</div>
      <ModalExample />
    </ExampleWrapper>
  );
};

export const ModalWithChildComponent = () => {
  return (
    <ExampleWrapper title='Simple Modal Example with ChildComponent'>
      <div>This is a simple example that includes a child component defined somewhere else.</div>
      <ModalExampleWithChildComponent />
    </ExampleWrapper>
  );
};

export const ModalWithManualDismiss = () => {
  return (
    <ExampleWrapper title='Simple Modal Example with manual dismiss'>
      <div>
        The example shows how you can use `const modalRef = useActionDialogRef()` and
        `modalRef.current.dismiss()` to close this modal
      </div>
      <ModalExampleWithManualDismiss />
    </ExampleWrapper>
  );
};

export const ModalWithFormSubmit = () => {
  return (
    <ExampleWrapper title='Simple Modal Example with Form Submit'>
      <div>
        The example shows how you can use `modalRef` to programmitcally close out the dialog after
        the form submission
      </div>
      <ModalExampleWithFormSubmit />
    </ExampleWrapper>
  );
};

export const Prompt = () => {
  return (
    <ExampleWrapper title='Simple Prompt Example'>
      <PromptExample />
    </ExampleWrapper>
  );
};
