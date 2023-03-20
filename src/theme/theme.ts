import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/700.css";

export const theme = extendTheme({
  fonts: {
    body: `'Montserrat',sans-serif`,
  },
  colors: {
    black: {
      200: "#eeeeee",
      900: "#111111",
    }
  }
});
