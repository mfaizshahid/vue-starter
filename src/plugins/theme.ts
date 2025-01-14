import {type ThemeDefinition} from "vuetify";

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#2C2727",
    secondary: "#3E3939",
    background: "#fafcff",
    // Errors
    error: "#dc3545",
    danger: "#dc3545",
    "danger-dark": "#2c0b0e",
    "danger-light": "#FF8473",
    "danger-bg": "rgba(255, 247, 245, 1)",
    // Info
    info: "#2196F3",
    "info-dark": "#032830",
    "info-light": "#F6F9FF",
    // Success
    success: "#3CE17E",
    "success-light": "#F4FCF5",
    "success-bg": "rgba(244, 252, 245, 1)",
    // Warning
    warning: "#ffc107",
    "warning-dark": "#332701",
  },
};

export {lightTheme};
