import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#eeeeee',
    },
  },
};

export const theme = createTheme(themeOptions);