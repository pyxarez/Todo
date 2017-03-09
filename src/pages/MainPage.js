import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Tasks from '../components/layout/Tasks';
import DataStorage from '../components/utils/DataStorage';
import './MainPage.res/style.css';

export default class MainPage extends Component {
  state = { globalStorage: DataStorage.of() }

  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  render() {
    console.log(this.state);
    const {
      category,
      filter
    } = this.props.params;

    return (
      <div className="my-main-page-component">
        <Header
          currentCategory={category}/>
        <div className="main">
          <Sidebar
            inputRequired={true}
            changeGlobalStorage={this.setState.bind(this)}
            globalStorage={this.state.globalStorage}/>
          <Tasks
            keyWord={filter}
            currentCategory={category}
            changeGlobalStorage={this.setState.bind(this)}
            globalStorage={this.state.globalStorage}/>
        </div>
      </div>
    );
  }
}


