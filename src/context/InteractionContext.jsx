"use client";
import { createContext, useState, useContext } from "react";

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
    const [interactions, setInteractions] = useState([]);

    const addInteraction = (friendName, type ,picture) => {
        const newEntry = {
            id: Date.now(),
            name: friendName,
            type: type,
            picture: picture,
            date: new Date().toLocaleString(),
        };
        setInteractions((prev) => [newEntry, ...prev]);
    };

    return (
        <InteractionContext.Provider value={{ interactions, addInteraction }}>
            {children}
        </InteractionContext.Provider>
    );
};

export const useInteractions = () => useContext(InteractionContext);