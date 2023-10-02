import React from 'react'
// import {
//   ActionDialogsContext as _ActionDialogsContext,
//   useActionDialogs as _useActionDialogs,
// } from './hooks/ActionDialogs';

// export const ActionDialogsContext = _ActionDialogsContext;
// export const useActionDialogs = _useActionDialogs;


export const ActionDialogsContext = (props) => {
  // return <>
  //   {props.children}
  //   <div>hello world 123</div>
  // </>
  return 'hello world 123'
}

export const useActionDialogs= () => {
  return {
    // dialogs: data,
    // dialog,
    alert: () => {console.log('>> alert')},
    prompt: () => {console.log('>> prompt')},
    confirm: () => {console.log('>> confirm')},
    choice: () => {console.log('>> choice')},
    dismiss: () => {console.log('>> dismiss')},
    modal: () => {console.log('>> modal')},
  };
}
