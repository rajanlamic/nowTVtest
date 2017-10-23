export function getMembersDetailsById(userId, members) {
	return members.find(item => {
		return item.id === userId;
	})
}

export function getOtimizedMessages(messages, members) {
	let otimized = [];

	messages.forEach(item => {
		otimized.push({
			id: item.id,
			message: item.message,
			timestamp: item.timestamp,
			membersDetail: getMembersDetailsById(item.userId, members)
		});
	})

	return otimized;
}