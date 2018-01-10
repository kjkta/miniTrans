const miniTrans = {
  messages: {},
  locale: "en",
}

const getTranslation = (msgId) => {
  if(miniTrans.locale === "en") return msgId
  const msg = miniTrans.messages[miniTrans.locale][msgId]
  if(msg) return msg
  return ""
}

const makeTranslations = (messages, locale) => { 
  miniTrans.messages = messages
  miniTrans.locale = locale
  return getTranslation
};

export { makeTranslations }
