import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
	it('should render without crashing', () => {
	  const div = document.createElement('div');
	  const defaultProps = {
	  	getChatLog: jest.fn()
	  }
	  ReactDOM.render(<App.WrappedComponent {...defaultProps} />, div);
	});
})


