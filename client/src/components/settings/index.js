import React from "react";
import PropTypes from "prop-types";
import ThemeColorPresets from "./ThemeColorPresets";
import ThemeContrast from "./ThemeContrast";
import ThemeLocalization from "./ThemeLocalization";
import ThemeRtlLayout from "./ThemeRtlLayout";
import SettingsDrawer from "./drawer";

const ThemeSettings = ({ children }) => {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeLocalization>
          <ThemeRtlLayout>
            {children}
            <SettingsDrawer />
          </ThemeRtlLayout>
        </ThemeLocalization>
      </ThemeContrast>
    </ThemeColorPresets>
  );
};

ThemeSettings.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeSettings;
