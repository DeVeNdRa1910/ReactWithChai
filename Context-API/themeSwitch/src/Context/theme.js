import { createContext , useContext } from "react";

// in previous method(miniContext) we not providing initial value fop context
// But in this method we are providing initial value to CreatContext inside ()

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// we can create context without importing
/* 
export const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})
// No need to import createContext
*/

export const ThemePreovider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}

// yahi tarika recomended hai