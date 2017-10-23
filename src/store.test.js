import { reducer } from './store';
import { MESSAGES, MEMBERS } from './constants';

describe('Store', () => {
	it('should set messages in the store', () => {
	  const messages = [{
	    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
	    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
	    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
	    timestamp: '2017-02-09T04:27:38Z'
	  }]

	  const updatedStore = reducer({}, { type: `${MESSAGES.MESSAGES_LOADING}_FULFILLED`, payload: messages });

	  expect(updatedStore.messages).toEqual(messages);
	});

	it('should set members in the store', () => {
	  const members = [{
		  "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
	    "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
	    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
	    "timestamp": "2017-02-09T04:27:38Z"
	  }]

	  const updatedStore = reducer({}, { type: `${MEMBERS.MEMBERS_LOADING}_FULFILLED`, payload: members });

	  expect(updatedStore.members).toEqual(members);
	});

	it('should set otimized messages in the store', () => {
	  const optimizedMessages = [{
		  "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
	    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
	    "timestamp": "2017-02-09T04:27:38Z",
	    "membersDetail": {
	    	"id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
		    "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
		    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
		    "timestamp": "2017-02-09T04:27:38Z"
	    }
	  }]

	  const updatedStore = reducer({}, { type: MESSAGES.OPTIMIZE_LOADING, payload: optimizedMessages });

	  expect(updatedStore.optimizedMessages).toEqual(optimizedMessages);
	});
})

