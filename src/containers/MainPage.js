import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCategory, getCategories } from '../actions/CategoryActions';
import { getProgress } from '../actions/ProgressActions';
import { getTasks } from '../actions/TaskListActions';
import toggleShowDone from '../actions/ShowDoneActions';

import Header from '../components/Header';
import ShowDone from '../components/ShowDone';
import Filter from '../components/Filter';
import Progressbar from '../components/Progressbar';
import TextBox from '../components/TextBox';

import TaskListContainer from './TaskList';
import Sidebar from './Sidebar';
import MainPageCategoryContainer from './MainPageCategory';

import './MainPage.res/style.css';

export class MainPageContainer extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    addCategory: PropTypes.func.isRequired,
    getProgress: PropTypes.func.isRequired,
    toggleShowDone: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    progress: React.PropTypes.string.isRequired,
    showDone: React.PropTypes.bool.isRequired,
  }

  componentDidMount = () => {
    this.props.getProgress();
  }

  render() {
    const id = +this.props.params.id;
    const {
      addCategory,
      progress,
      showDone,
      toggleShowDone
    } = this.props;

    return (
      <div className='my-main-page-component'>
        <Header title={'To-Do List'}>
          <ShowDone
            handleShowDoneClick={toggleShowDone}
            showDone={showDone}/>
          <Filter
            URLParams={this.props.params}/>
          <Progressbar progress={progress}/>
        </Header>
        <div className='main'>
          <div className='main__sidebar'>
            <TextBox
              isFocused={true}
              onClick={addCategory}
              placeholder='Enter category title'/>
            <Sidebar
              categoryContainer={MainPageCategoryContainer}
              currentCategoryId={id}/>
          </div>
          <TaskListContainer
            URLParams={this.props.params}
            showDone={showDone}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ progress, showDone }) => {
  return {
    progress,
    showDone
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: bindActionCreators(addCategory, dispatch),
    getProgress: bindActionCreators(getProgress, dispatch),
    toggleShowDone: bindActionCreators(toggleShowDone, dispatch),
    getTasks: bindActionCreators(getTasks, dispatch),
    getCategories: bindActionCreators(getCategories, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
