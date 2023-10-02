"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionDialogs = exports.ActionDialogsContext = void 0;
// import {
//   ActionDialogsContext as _ActionDialogsContext,
//   useActionDialogs as _useActionDialogs,
// } from './hooks/ActionDialogs';
// export const ActionDialogsContext = _ActionDialogsContext;
// export const useActionDialogs = _useActionDialogs;
const ActionDialogsContext = (props) => {
    // return <>
    //   {props.children}
    //   <div>hello world 123</div>
    // </>
    return 'hello world 123';
};
exports.ActionDialogsContext = ActionDialogsContext;
const useActionDialogs = () => {
    return {
        // dialogs: data,
        // dialog,
        alert: () => { console.log('>> alert'); },
        prompt: () => { console.log('>> prompt'); },
        confirm: () => { console.log('>> confirm'); },
        choice: () => { console.log('>> choice'); },
        dismiss: () => { console.log('>> dismiss'); },
        modal: () => { console.log('>> modal'); },
    };
};
exports.useActionDialogs = useActionDialogs;
//# sourceMappingURL=index.js.map