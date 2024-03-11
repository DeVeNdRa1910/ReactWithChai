import { createContext , useContext } from "react";

// in previous method(miniContext) we not providing initial value fop context
// But in this method we are providing initial value to CreatContext inside ()

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemePreovider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}

// yahi tarika recomended hai