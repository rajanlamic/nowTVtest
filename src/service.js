import { getMessages, getMembers } from './data';
import { getOtimizedMessages } from './utils';
import { MESSAGES, MEMBERS } from './constants';

export default function getChatLog() {
	let messages, members;
  return dispatch => dispatch({
    type: MESSAGES.MESSAGES_LOADING,
    payload: getMessages()
  }).then((value, action) => {
		messages = value;
		dispatch({
	  	type: MEMBERS.MEMBERS_LOADING,
	    payload: getMembers()
	  }).then((value, action) => {
	  	members = value;
	  	dispatch({
		  	type: MESSAGES.OPTIMIZE_LOADING,
		    payload: getOtimizedMessages(messages.value, members.value)
		  })
	  }).catch(error => console.log('error', error));
	}).catch(error => console.log('error', error))
}