import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';
const palette = {
  darkBlue: 'rgb(3, 100, 170)',
  darkerBlue: '#035088',
  white: '#FFFFFF',
  lightBlue: '#03BCF4',
  green: '#01781C',
  yellow: '#FFC107',
  red: '#DC3545',
  darkCharcoal: '#2B3536',
  mediumCharcoal: '#354141',
  lightCharcoal: '#3D4949',
  darkerGrey: '#666666',
  darkGrey: '#8C949A',
  grey: '#AAB4BC',
  lightGrey: '#CED4DA',
  lighterGrey: '#EEF0F2',
  portalTheme: 'rgb(3, 100, 170)',
};
export default {
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: palette.portalTheme,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: palette.portalTheme,
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    white: {
      // light: will be calculated from palette.primary.main,
      main: palette.white,
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  props: {
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiDrawer: {
      backgroundColor: '#20252b',
      color: '#fff',
    },
  },
  overrides: {
    MUIDataTableFilter: {
      gridListTile: {
        marginTop: '0px',
      },
    },
    MuiGridListTile: {
      root: {
        padding: '5px 10px !important',
      },
    },
    MuiTabs: {
      root: {
        borderBottom: '1px solid ' + palette.grey,
      },
    },
    MuiTabPanel: {
      root: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    MuiIconButton: {
      sizeSmall: {
        // Adjust spacing to reach minimal touch target hitbox
        marginLeft: 4,
        marginRight: 4,
        padding: 12,
      },
    },
  },
} as ThemeOptions;
