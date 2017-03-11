import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Tasks from '../components/layout/Tasks';
import DataStorage from '../components/utils/DataStorage';
import './MainPage.res/style.css';

export default class MainPage extends Component {
  state = {
    globalStorage: DataStorage.of(),
    filterByDone: false
  }

  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  handleShowDoneClick = () => {
    this.setState({ filterByDone: !this.state.filterByDone });
  }

  render() {
    const {
      id,
      category,
      filter
    } = this.props.params;
    const globalStorage = this.state.globalStorage;
    const filterByDone = this.state.filterByDone;

    return (
      <div className="my-main-page-component">
        <Header
          id={id}
          filterByDone={filterByDone}
          handleShowDoneClick={this.handleShowDoneClick}
          globalStorage={globalStorage}
          currentCategory={category}/>
        <div className="main">
          <Sidebar
            inputRequired={true}
            changeGlobalStorage={this.setState.bind(this)}
            globalStorage={globalStorage}/>
          <Tasks
            id={id}
            keyWord={filter}
            filterByDone={filterByDone}
            changeGlobalStorage={this.setState.bind(this)}
            globalStorage={globalStorage}/>
        </div>
      </div>
    );
  }
}


