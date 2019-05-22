import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import SearchBarProps from './SearchBarProps';
import SearchBarState from './SearchBarState';
import styles from './SearchBarStyle';

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  readonly state = {
    searchQuery: '',
  };

  public render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} onSubmit={this.onFormSubmit}>
        <div className={classes.search}>
          <InputBase
            placeholder='検索'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={this.onInputChange}
          />
        </div>
        <Button className={classes.searchButton} type='submit' color='inherit'>
          <SearchIcon />
        </Button>
      </form>
    );
  }

  public onInputChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      searchQuery: e.currentTarget.value,
    });
  };

  public onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.searchQuery.trim()) {
      return;
    }

    this.props.searchVideos(this.state.searchQuery);
  };
}

export default withStyles(styles)(SearchBar);
