import { getMembersDetailsById, getOtimizedMessages } from './utils';

describe('utils', () => {
	let messages, members;

	beforeEach(() => {
		messages = [{
			"id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
	    "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
	    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
	    "timestamp": "2017-02-09T04:27:38Z"
		}]

		members = [{
			"id": "e837c9f5-247f-445f-bcc3-7d434348336b",
	    "firstName": "Martin",
	    "lastName": "Bradley",
	    "email": "mbradley0@google.it",
	    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
	    "ip": "166.124.172.160"
		}]
	})

	afterEach(() => {
		messages = null;
		members = null;
	})

	it('aa', () => {
		expect(1).toEqual(1);
	})

	it('shoult get optimized messages', () => {
		const expected = [{
			"id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
	    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
	    "timestamp": "2017-02-09T04:27:38Z",
	    "membersDetail": members[0]
		}]

		expect(getOtimizedMessages(messages, members)).toEqual(expected);

	})

	it('should get members details by users id', () => {
		expect(getMembersDetailsById("e837c9f5-247f-445f-bcc3-7d434348336b", members)).toEqual(members[0]);
	})
	
});