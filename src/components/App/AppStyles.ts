import { createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    grow2: {
      flexGrow: 2,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      width: '100%',
      top: 0,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      // marginLeft: drawerWidth,
      // width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      minHeight: 56,
      [theme.breakpoints.up('xs')]: {
        minHeight: 48,
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: 64,
      },
    },
    menuButton: {
      marginLeft: -20,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    drawerPaper: {
      position: 'fixed',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      // marginLeft: theme.spacing.unit,
      top: 56,
      [theme.breakpoints.up('xs')]: {
        top: 48,
      },
      [theme.breakpoints.up('sm')]: {
        top: 64,
      },
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 6,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 8,
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 7,
      width: `calc(100% - ${theme.spacing.unit * 7}px)`,
      height: 'auto',
      overflow: 'auto',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    contentShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
  });

export default styles;
