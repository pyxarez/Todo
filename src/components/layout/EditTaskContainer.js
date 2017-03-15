import React, { Component } from 'react';

import EditTask from './EditTask';

export default class EditTaskContainer extends Component {
  static propTypes ={

  }

  onSave = () => {
    const title = this.titleInput.value;
    const isDone = this.doneCheckBox.checked;
    const description = this.taskDescription.value;

    this.props.handleSaveChangesClick(title, isDone, description);
  }

  render() {
    const {
      handleCancelClick:onCancel,
      title,
      isDone,
      description
    } = this.props;

    return (
      <EditTask onSave={this.onSave} onCancel={onCancel}>
        <div>
          <input ref={(titleInput) => {this.titleInput = titleInput}} type="text" defaultValue={title}/>
          <input ref={(doneCheckBox) => {this.doneCheckBox = doneCheckBox}} type="checkbox" defaultChecked={isDone}/>
        </div>
        <textarea ref={(taskDescription) => {this.taskDescription = taskDescription}} defaultValue={description} className="description" name="description" cols="30" rows="30"></textarea>
      </EditTask>
    );
  }
}
