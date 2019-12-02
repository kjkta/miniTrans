function makeTranslations(messages = {}, locale = "en") {
  return function getTranslation(msgId, variables) {
		// It's english, return the ID
    if (locale === "en") return msgId;
		let message = getMessage(messages, locale, msgId)
		if(variables) {
			message = insertVariablesIntoMessage(message, variables)
		}
		return message
	}
}

function getMessage(messages, locale, msgId) {
	if(messages[locale]) {
		// We have messages for this locale	
		// If we have a message for this ID use that,
		// otherwise use the ID
		return messages[locale][msgId] || msgId
	} else {
		return msgId
	}
}

function insertVariablesIntoMessage(message, variables) {
	let completeMessage;
	variables.forEach(function(variable){
		completeMessage = message.replace('%s', variable)
	})
	return completeMessage
}

module.exports = { makeTranslations }
