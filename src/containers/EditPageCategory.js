import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { changeTaskLocation } from '../actions/CategoryActions';

import Button from '../components/Button';
import Category from '../components/Category';

import ShareExtendState from './ShareExtendState';

import './CategoryContainer.res/style.css';

class Container extends Component {
  static propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    extended: PropTypes.bool.isRequired,
    onExtend: PropTypes.func.isRequired,
    changeTaskLocation: PropTypes.func.isRequired,
    getChildrenCount: PropTypes.func.isRequired,
    currentCategoryId: PropTypes.number.isRequired,
    currentTaskId: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element.isRequired),
        PropTypes.bool
      ]).isRequired,
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
        <Category id={id} title={title} onExtend={ getChildrenCount(children) > 0 && onExtend }>
          {currentCategoryId !== id && 
            <Button
              type="swap"
              onClick={this.handleChangeTaskLocation}
              style={{ marginLeft: 'auto' }}/>}
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

