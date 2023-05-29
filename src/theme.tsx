import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const getColorTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: "#FF5800",
    },
    secondary: {
      main: "#fdd206",
    },
    ...(mode === "light"
      ? {}
      : {
          background: {
            default: "#2e2e2e",
            paper: "#2e2e2e",
          },
        }),
  },
});

interface IColorModeContext {
  toggle: () => void;
}
const ColorModeContext = createContext<IColorModeContext>(
  {} as IColorModeContext
);

const ColorModeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggle: () => {
        const newValue = mode === "dark" ? "light" : "dark";
        setMode(newValue);
        window.localStorage.setItem("theme", newValue);
      },
    }),
    [mode]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentMode =
        (window.localStorage.getItem("theme") as PaletteMode) || "light";
      setMode(currentMode);
      window.localStorage.setItem("theme", currentMode);
    }
  }, []);

  const theme = useMemo(() => createTheme(getColorTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;

export const useColorMode = () => useContext(ColorModeContext);
