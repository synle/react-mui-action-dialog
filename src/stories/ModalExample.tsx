import { useRef } from 'react';
import { ActionDialogRef, useActionDialogs } from 'react-mui-action-dialog';

export function ModalExample() {
  const { modal } = useActionDialogs();

  const onSubmit = async () => {
    try {
      await modal({
        title: 'Query Details',
        message: (
          <>
            <div>
              <strong>Name:</strong> Sample Mocked Query
            </div>
            <div>
              <strong>Status:</strong> Pending
            </div>
            <div>
              <strong>Created Date:</strong> {new Date().toLocaleDateString()}
            </div>
          </>
        ),
      });

      // when users close out of modal
    } catch (err) {}
  };

  return (
    <>
      <button onClick={onSubmit}>Show Details</button>
    </>
  );
}

export function ModalExampleWithManualDismiss() {
  const { modal } = useActionDialogs();
  const modalRef = useRef<ActionDialogRef>({});

  const onSubmit = async () => {
    try {
      await modal({
        title: 'Query Details',
        message: (
          <>
            <div>
              <strong>Name:</strong> Sample Mocked Query
            </div>
          </>
        ),
        modalRef: modalRef,
      });

      // when users close out of modal
    } catch (err) { }
  };

  return (
    <>
      <button onClick={onSubmit}>Show Details</button>
    </>
  );
}
