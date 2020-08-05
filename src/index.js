function makeTranslations(translations = {}, locale = "en") {
  return function getTranslation(messageKey, variables) {
		let message;
    if (locale === "en") {
			// It's english so just use the ID
			message = messageKey
		} else {
			message = getMessage(translations, locale, messageKey)
		}
		if(variables) {
			message = insertVariablesIntoMessage(message, variables)
		}
		return message
	}
}

function getMessage(translations, locale, messageKey) {
	if(translations[locale]) {
		// We have translations for this locale	
		// If we have a message for this ID use that,
		// otherwise use the ID
		return translations[locale][messageKey] || messageKey
	} else {
		return messageKey
	}
}

function insertVariablesIntoMessage(message, variables) {
	let completeMessage = message;
	for(let variable of variables) {
		completeMessage = completeMessage.replace('%s', variable)
	}
	return completeMessage
}

module.exports = { makeTranslations }
