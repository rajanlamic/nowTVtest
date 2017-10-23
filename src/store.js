import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MESSAGES, MEMBERS } from './constants';

const defaultState = {
  isMessageLoading : false,
  isMessageLoaded : false,
  isMemberLoading: false,
  isMemberLoaded: false,
  isOptimizedLoaded:false,
  messages: [],
  members: [],
  optimizedMessages: []
}

export function reducer(state = defaultState, action = {}) {
	switch (action.type) {
		case `${MESSAGES.MESSAGES_LOADING}_PENDING`:
			return {
        ...state,
        isMessageLoading: true
      };
    case `${MESSAGES.MESSAGES_LOADING}_FULFILLED`:
      return {
        ...state,
        isMessageLoaded: true,
        messages: action.payload
      };

    case `${MEMBERS.MEMBERS_LOADING}_PENDING`:
      return {
        ...state,
        isMemberLoading: true,
      };

    case `${MEMBERS.MEMBERS_LOADING}_FULFILLED`:
      return {
        ...state,
        isMemberLoaded: true,
        members: action.payload
      };
    case MESSAGES.OPTIMIZE_LOADING:
      return {
        ...state,
        isOptimizedLoaded: true,
        optimizedMessages: action.payload
      };

		default:
			return state;
	}
}

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware, promiseMiddleware()),
  // other store enhancers if any
));