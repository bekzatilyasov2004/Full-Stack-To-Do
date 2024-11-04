import { createContext, useContext, useEffect, useState } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
    const loadTasksFromLocalStorage = () => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : {};
    };

    const [tasks, setTasks] = useState(loadTasksFromLocalStorage());

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (date, task) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [date]: prevTasks[date] ? [...prevTasks[date], task] : [task],
        }));
    };

    const deleteTask = (date, index) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [date]: prevTasks[date].filter((_, i) => i !== index),
        }));
    };

    const updateTaskStatus = (date, index, status) => {
        setTasks(prevTasks => {
            const updatedTasks = [...(prevTasks[date] || [])];
            if (updatedTasks[index]) {
                updatedTasks[index] = { ...updatedTasks[index], status };
            }
            return { ...prevTasks, [date]: updatedTasks };
        });
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, updateTaskStatus }}>
            {children}
        </TasksContext.Provider>
    );
};
