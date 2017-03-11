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
    const {
      id,
      category,
      filter
    } = this.props.params;
    const globalStorage = this.state.globalStorage;
    const taskList = globalStorage.getTasks(id);
    const progress = globalStorage.getProgress();

    return (
      <div className="my-main-page-component">
        <Header
          id={id}
          progress={progress}
          currentCategory={category}/>
        <div className="main">
          <Sidebar
            inputRequired={true}
            changeGlobalStorage={this.setState.bind(this)}
            globalStorage={this.state.globalStorage}/>
          <Tasks
            keyWord={filter}
            id={id}
            taskList={taskList}
            changeGlobalStorage={this.setState.bind(this)}
            globalStorage={this.state.globalStorage}/>
        </div>
      </div>
    );
  }
}


