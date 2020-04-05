import { createMuiTheme } from "@material-ui/core/styles";

import typography from "./typography";

const theme = createMuiTheme({
  typography: {
    fontFamily: typography.fontFamily
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "transparent"
      }
    }
  }
});

export default theme;
