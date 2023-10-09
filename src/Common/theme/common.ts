import { PaletteOptions, ThemeOptions } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

const commonPaletteOptions: PaletteOptions = {
  error: {
    light: '#FFEAEA',
    main: '#d32f2f', // not overridden
    dark: '#B83131',
  },
  info: {
    light: '#EAECFF',
    main: '#0288d1', // not overridden
    dark: '#3D42AD',
  },
  success: {
    light: '#EDFFEA',
    main: '#2e7d32', // not overridden
    dark: '#165E3D',
  },
  warning: {
    light: '#FFF6E9',
    main: '#ed6c02', // not overridden
    dark: '#B5850B',
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
