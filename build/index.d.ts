export declare const ActionDialogsContext: (props: any) => string;
export declare const useActionDialogs: () => {
    alert: () => void;
    prompt: () => void;
    confirm: () => void;
    choice: () => void;
    dismiss: () => void;
    modal: () => void;
};
