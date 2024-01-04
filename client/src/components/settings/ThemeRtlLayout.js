import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

const ThemeRtlLayout = ({ children }) => {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    stylisPlugins: theme.direction === "rtl" ? [rtlPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

ThemeRtlLayout.propTypes = {
  children: PropTypes.node,
};

export default ThemeRtlLayout;
