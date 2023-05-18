import React, {createContext, useState} from "react";
import {Task} from "../../Model/Task.ts";

type ToDoContextProviderProps = {
    children:React.ReactNode
}
export type ToDoContextProps = {
    taskListState: Task[],
    setTaskListState: React.Dispatch<React.SetStateAction<Task[]>>
}

const DEFAULT_VALUE = {
    taskListState: [],
    setTaskListState: ()=> [{}],
}
const ToDoContext = createContext<ToDoContextProps>(DEFAULT_VALUE);

const ToDoContextProvider =  ({children}: ToDoContextProviderProps) => {
    const [taskListState, setTaskListState] = useState<Task[]>([]);
    return (<ToDoContext.Provider value={{
        taskListState,
        setTaskListState,
    }}>
        {children}
    </ToDoContext.Provider>);
}

export {ToDoContextProvider};
export default ToDoContext;