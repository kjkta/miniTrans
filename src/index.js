const miniTrans = {
  messages: {},
  locale: "en",
  defaultLocale: "en",
}

const getTranslation = (msgId) => {
  if(miniTrans.locale === miniTrans.defaultLocale) return msgId
  const msg = miniTrans.messages[miniTrans.locale][msgId]
  if(msg) return msg
  const defaultLanguageMsg = miniTrans.messages.en[msgId]
  if(defaultLanguageMsg) return defaultLanguageMsg
  return ""
}

const makeTranslations = (messages, locale) => { 
  miniTrans.messages = messages
  miniTrans.locale = locale
  return getTranslation
};

export { makeTranslations }
