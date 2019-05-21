import React from 'react';
import SearchFormProps from './SearchFormProps';
import SearchFormState from './SearchFormState';

export default class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  readonly state = {
    input: '',
  };

  public render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            value={this.state.input}
            onChange={this.onInputChange}
            aria-label='todo-input'
          />
          <button type='submit' className='todo-submit'>
            検索
          </button>
        </form>
      </div>
    );
  }

  public onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      input: e.currentTarget.value,
    });
  };

  public onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.input.trim()) {
      return;
    }

    this.props.searchVideos(this.state.input);
  };
}
