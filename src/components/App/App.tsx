import React from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../utils/theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { mainDrawerItems } from './DrawerItems';
import SearchBar from '../../containers/SearchBar/SearchBar';
import VideList from '../../containers/VideoList/VideoList';

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

export interface Props extends WithStyles<typeof styles> {}

interface State {
  anchorEl: null | HTMLElement;
  isOpenDrawer: boolean;
}

class PrimarySearchAppBar extends React.Component<Props, State> {
  state: State = {
    anchorEl: null,
    isOpenDrawer: false,
  };

  private handleDrawerOpen = () => {
    this.setState({ isOpenDrawer: !this.state.isOpenDrawer });
  };

  handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={classNames(classes.appBar, this.state.isOpenDrawer && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                className={classes.menuButton}
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant='h6' color='inherit' noWrap>
                My YouTube Client
              </Typography>
              <div className={classes.grow} />
              <SearchBar />
              <div className={classes.grow2} />
              <div className={classes.sectionDesktop}>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup='true'
                  onClick={this.handleProfileMenuOpen}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.isOpenDrawer && classes.drawerPaperClose
              ),
            }}
            open={this.state.isOpenDrawer}
          >
            <List>{mainDrawerItems}</List>
          </Drawer>
          {renderMenu}
          <main
            className={classNames(classes.content, this.state.isOpenDrawer && classes.contentShift)}
          >
            <div className={classes.appBarSpacer} />
            <VideList />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
