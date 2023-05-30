import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '../src/routes/home.tsx';
import {ToDoList} from "./routes/ToDo.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/To-Do",
                element: <ToDoList/>,
            },

        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)