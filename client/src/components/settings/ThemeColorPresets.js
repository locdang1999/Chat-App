import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider,
  useTheme,
  createTheme,
  alpha,
} from "@mui/material/styles";
import useSettings from "./../../hooks/useSettings";
import ComponentsOverrides from "./../../theme/overrides/index";

const ThemeColorPresets = ({ children }) => {
  const defaultTheme = useTheme();

  const { setColor } = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
      },
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeColorPresets.propTypes = {
  children: PropTypes.node,
};

export default ThemeColorPresets;
