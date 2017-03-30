import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateInput } from '../utils/helpers';

import { saveTaskChanges } from '../store/actions/TaskListActions';

import EditTask from '../components/EditTask';

export class EditTaskContainer extends Component {
  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    }),
    categoryId: PropTypes.number.isRequired,
    saveTaskChanges: PropTypes.func.isRequired,
  }

  onSave = () => {
    const title = this.titleInput.value;
    const isDone = this.doneCheckBox.checked;
    const description = this.taskDescription.value;

    if (!validateInput(title)) {
      alert('Enter correct task title');
      return;
    }

    const options = {
      categoryId: this.props.categoryId,
      id: this.props.task.id,
      title,
      isDone,
      description
    };

    this.props.saveTaskChanges(options);
    browserHistory.goBack();
  }

  handleCancelClick = () => {
    browserHistory.goBack();
  }

  render() {
    const {
      title,
      isDone,
      description
    } = this.props.task;

    return (
      <EditTask onSave={this.onSave} onCancel={this.handleCancelClick}>
        <div>
          <input ref={(titleInput) => {this.titleInput = titleInput}} type="text" defaultValue={title}/>
          <input ref={(doneCheckBox) => {this.doneCheckBox = doneCheckBox}} type="checkbox" defaultChecked={isDone}/>
        </div>
        <textarea
          ref={(taskDescription) => {this.taskDescription = taskDescription}}
          defaultValue={description}
          className="description"
          name="description"
          cols="30"
          rows="30" />
      </EditTask>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTaskChanges: bindActionCreators(saveTaskChanges, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(EditTaskContainer)