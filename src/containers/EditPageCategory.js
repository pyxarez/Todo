import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { changeTaskLocation } from '../store/actions/CategoryActions';

import Button from '../components/Button';
import Category from '../components/Category';

import ShareExtendState from './ShareExtendState';

import './CategoryContainer.res/style.css';

export class Container extends Component {
  static propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    extended: PropTypes.bool.isRequired,
    onExtend: PropTypes.func.isRequired,
    changeTaskLocation: PropTypes.func.isRequired,
    getChildrenCount: PropTypes.func.isRequired,
    currentCategoryId: PropTypes.number.isRequired,
    currentTaskId: PropTypes.number.isRequired,
    children: React.PropTypes.oneOfType(
      [
        React.PropTypes.arrayOf(React.PropTypes.element.isRequired),
        React.PropTypes.bool,
        React.PropTypes.object
      ]
    ),
  }

  handleChangeTaskLocation = () => {
    const {
      id,
      currentCategoryId,
      currentTaskId,
      changeTaskLocation
    } = this.props;

    changeTaskLocation(currentCategoryId, id, currentTaskId);
    browserHistory.goBack();
  }

  render() {
    const {
      id,
      title,
      extended,
      onExtend,
      getChildrenCount,
      children,
      currentCategoryId
    } = this.props;

    return (
      <div className='my-categoryContainer-component'>
        <Category
          id={id}
          title={title}
          onExtend={ getChildrenCount(children) > 0 && onExtend }>
          {currentCategoryId !== id &&
            <Button
              type="swap"
              onClick={this.handleChangeTaskLocation} />}
        </Category>
        {children &&
          <div className={extended
            ? "categories categories_extended"
            : "categories categories_hidden"}>{children}</div>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTaskLocation: bindActionCreators(changeTaskLocation, dispatch),
  }
}

const EditPageCategoryContainer = ShareExtendState(Container);
export default connect(null, mapDispatchToProps)(EditPageCategoryContainer)
