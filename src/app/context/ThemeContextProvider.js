'use client';

import { createContext } from 'react';
import {useState} from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {

    const [darkMode, setDarkMode] = useState('light');

    const values = {
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        lang: "es"
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}
