import { createContext, ReactNode, useContext, useState } from "react";

type ThemeName = "dark" | "light";

type ThemeContextValue = {
  themeName: ThemeName;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  function toggleTheme() {
    setThemeName((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        isDark: themeName === "dark",
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return theme;
}
