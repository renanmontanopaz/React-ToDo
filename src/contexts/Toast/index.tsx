import React, {createContext, useState} from "react";

type ToastProviderProps = {
    children: React.ReactNode;
}
type Toast = {
    message: string;
    type: 'success'|'danger';
}
export type ToastContextProps = {
    isHidden: boolean;
    showToast(data: Toast): void;
}


export const ToastContext = createContext<ToastContextProps>({
    isHidden: false,
    showToast: () => {}
} as ToastContextProps);

const ToastProvider = ({children}: ToastProviderProps) =>{
    const [isHidden, setIsHidden]= useState<boolean>(true);
    const {Toast, setToast} = useState<Toast>({
    message: '',
    type: 'success'
})
    const showToast = ({message, type}: Toast) => {
        setToast({
            message,
            type
        })
        setIsHidden(false);
        setTimeout(()=> {
            setIsHidden(true)
        }, 2800);
    }
    return(
        <ToastContext.Provider value={{isHidden, showToast}}>
            {isHidden && <Toast message={Toast.message} type={Toast.type}/>}
            {children}
        </ToastContext.Provider>
    )
}

export {ToastProvider};
export default ToastContext;
