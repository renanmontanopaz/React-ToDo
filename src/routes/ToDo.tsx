import {Content} from "../components/Content";
import {ToDoContextProvider} from "../contexts/ToDo";
import {ToastProvider} from "../contexts/Toast";
import {Header} from "../components/Header";

export const ToDoList = () => {
    return(
        <>
            <ToastProvider>
                <ToDoContextProvider>
                    <Header/>
                    <Content/>
                </ToDoContextProvider>
            </ToastProvider>
        </>
    )
}