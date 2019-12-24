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
import { withStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { mainDrawerItems } from './DrawerItems';
import SearchBar from '../../containers/SearchBar/SearchBar';
import VideList from '../../containers/VideoList/VideoList';
import styles from './AppStyles';
import Props from './AppProps';
import State from './AppState';

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
              paper: classNames(classes.drawerPaper, !this.state.isOpenDrawer && classes.drawerPaperClose),
            }}
            open={this.state.isOpenDrawer}
          >
            <List>{mainDrawerItems}</List>
          </Drawer>
          {renderMenu}
          <main className={classNames(classes.content, this.state.isOpenDrawer && classes.contentShift)}>
            <div className={classes.appBarSpacer} />
            <VideList />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
