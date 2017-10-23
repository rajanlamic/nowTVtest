import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getChatLog from './service';
import './App.css';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';

class App extends Component {
  
  static propTypes = {
    isMessageLoading: PropTypes.bool,
    isMessageLoaded: PropTypes.bool,
    isMemberLoading: PropTypes.bool,
    isMemberLoaded: PropTypes.bool,
    isOptimizedLoaded : PropTypes.bool,
    optimizedMessages: PropTypes.array.isRequired,
    getChatLog: PropTypes.func
  };

	componentDidMount() {
		this.props.getChatLog();
	}
	
  render() {
    return (
      <div>
        {
          this.props.isMessageLoading && !this.props.isMessageLoaded && (
            <h1>Message Loading...</h1>
            )
        }
        {
          this.props.isMemberLoading && !this.props.isMemberLoaded && (
            <h1>Member Loading...</h1>
            )
        }
        {
          this.props.isOptimizedLoaded && this.props.optimizedMessages && (
            <ul>
              {
                this.props.optimizedMessages.sort((o1,o2) => new Date(o1.timestamp) - new Date(o2.timestamp))
                .map(item => (
                  <li key={item.id}>
                    <div title={item.membersDetail.email}>{item.message}</div>
                    <div><img src={item.membersDetail.avatar} alt={item.membersDetail.avatar} /></div>
                    <div>{moment.utc(item.timestamp).format('DD-MM-YYYY HH:mm')}</div>
                  </li>
                ))
              }
            </ul>)
        }
      </div>
    );
  }
}

App.defaultProps = {
  isMessageLoading: false,
  isMessageLoaded: false,
  isMemberLoading: false,
  isMemberLoaded: false,
  isOptimizedLoaded : false,
  optimizedMessages: []
}

const mapStateToProps = state => {
  return {
    isMessageLoading: state.isMessageLoading,
    isMessageLoaded: state.isMessageLoaded,
    isMemberLoading: state.isMemberLoading,
    isMemberLoaded: state.isMemberLoaded,
    isOptimizedLoaded : state.isOptimizedLoaded,
    optimizedMessages: state.optimizedMessages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
