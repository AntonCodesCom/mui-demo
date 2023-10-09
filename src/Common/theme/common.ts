import { PaletteOptions, ThemeOptions } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

const commonPaletteOptions: PaletteOptions = {
  success: {
    light: '#EDFFEA',
    main: '#2e7d32',
    dark: '#165E3D',
  },
};

/**
 * Helper object for defining light & dark themes.
 */
export const commonPalette = createPalette(commonPaletteOptions);

/**
 * Common properties for both light & dark themes.
 */
const commonThemeOptions: ThemeOptions = {
  palette: commonPaletteOptions,
  spacing: (factor: number) => `${1 * factor}rem`, // 1 MUI unit = 1rem
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 500,
        },
        icon: {
          paddingLeft: '0.1rem',
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        gutters: {
          paddingLeft: '1rem !important', // overriding .MuiToolbar-root
          paddingRight: '1rem !important', // overriding .MuiToolbar-root
        },
      },
    },
  },
};

export default commonThemeOptions;
