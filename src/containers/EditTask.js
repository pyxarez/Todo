import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';

import { validateInput } from '../utils/helpers';

import { saveTaskChanges } from '../store/actions/TaskListActions';

import EditTask from '../components/EditTask';
import TextInput from '../components/TextInput';
import CheckBoxInput from '../components/CheckBoxInput';

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
    const textInput = ReactDOM.findDOMNode(this.titleInput);
    const checkboxInput = ReactDOM.findDOMNode(this.doneCheckBox).firstChild;

    const title = textInput.value;
    const isDone = checkboxInput.checked;
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

    this.props.saveTaskChanges(options)
      .then(() => { browserHistory.goBack(); });
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
        <div className='wrapper'>
          <TextInput
            ref={(titleInput) => {this.titleInput = titleInput}}
            defaultValue={title}/>
          <CheckBoxInput
            ref={(doneCheckBox) => {this.doneCheckBox = doneCheckBox}}
            defaultChecked={isDone}/>
        </div>
        <textarea
          ref={(taskDescription) => {this.taskDescription = taskDescription}}
          placeholder='Type task description here'
          defaultValue={description}
          className="description"
          name="description" />
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
