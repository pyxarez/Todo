import React, { Component } from 'react';

// import Sidebar from '../components/layout/Sidebar';
import './EditPage.res/style.css';

export default class EditPage extends Component {
  render() {
    return (
      <div className="my-edit-page-component">
        <h1>To-Do Item #1</h1>
        <div className="main">
          {/* <Sidebar /> */}
          <div className="main__task-edit">
            <div className="buttons-container">
              <button>Save changes</button>
              <button>Cancel</button>
            </div>
            <form>
              <input type="text" defaultValue="To-Do Item #1"/>
              <input type="checkbox"/>
            </form>
            <textarea className="description" name="description" cols="30" rows="30"></textarea>
          </div>
        </div>
      </div>
    );
  }
}
