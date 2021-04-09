import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';

export default class Bugs extends Component {
  static contextType = StoreContext;

  state = { bugs: [] };

  componentDidMount() {
    const store = this.context;

    this.unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (this.state.bugs !== bugsInStore) {
        this.setState({ bugs: bugsInStore });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <div>Bugs</div>
  }
}
