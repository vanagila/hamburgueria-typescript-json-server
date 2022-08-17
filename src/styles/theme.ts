import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#27AE60",
      50: "#93D7AF",
    },
    secondary: "#EB5757",
    negative: "#E60000",
    warning: "#FFCD07",
    sucess: "#168821",
    information: "#155BCB",
    gray: {
      600: "#333333",
      300: "#828282",
      100: "#E0E0E0",
      50: "#999999",
      0: "#F5F5F5",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xm: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.625rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
        },
      },
    },
  },
});
