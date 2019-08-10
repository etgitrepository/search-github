import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUser } from '../../actions';
import './search-bar.css';

const initialState = {
  search: '',
};

export class SearchBar extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = initialState;
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search) {
      this.props.dispatch(searchUser(this.state.search));
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Search user' onChange={e => this.setState({ search: e.target.value })} />
        </form>
      </div>
    );
  }
}

export default connect()(SearchBar);
