import { FC, createContext } from "react";
import { ThemeProviderProps } from "./types";
import { themes as defaultThemes } from "./themes";

interface ThemeContextInterface<T> {
  styles: T;
}

export const ThemeContext = createContext<
  ThemeContextInterface<typeof defaultThemes>
>({
  styles: defaultThemes,
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
